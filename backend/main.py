import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from sqlmodel import Field, Session, SQLModel, create_engine, select
from sqlalchemy.exc import IntegrityError
from datetime import datetime, timedelta, timezone
from typing import Optional
import jwt
import base64
import hashlib
import hmac
import re
from sqlalchemy import text

class Users(SQLModel, table=True):
    fullname: str = Field(index=True)
    email: str = Field(index=True, primary_key=True)
    whatsapp_number: Optional[str] = Field(default=None, index=True)
    password_hash: Optional[str] = Field(default=None)

class Requests(SQLModel, table=True):
    email: str = Field(index=True, primary_key=True)
    service: str = Field(index=True)
    details: str = Field(index=True)


class UserRequest(SQLModel):
    fullname: str 
    email: str 
    service: str
    details: str

class UserCreate(SQLModel):
    fullname: str
    email: str
    whatsapp_number: str
    password: str

class LoginRequest(SQLModel):
    email: str
    password: str

load_dotenv()
CONNECTION_STRING = os.environ.get("DB_URL")


JWT_SECRET = os.environ.get("JWT_SECRET")
JWT_ALGORITHM = "HS256"
JWT_EXPIRY_DAYS = 7

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://access-dev-two.vercel.app", "https://accessdev.co.zw", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

engine = create_engine(CONNECTION_STRING, connect_args={"sslmode": "require"}, pool_recycle=300)
SQLModel.metadata.create_all(engine)

# Existing deployments predate these fields. PostgreSQL supports this migration
# safely, and new installations receive them through SQLModel.create_all above.
with engine.begin() as connection:
    connection.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS whatsapp_number VARCHAR"))
    connection.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR"))


def hash_password(password: str) -> str:
    salt = os.urandom(16)
    derived_key = hashlib.scrypt(password.encode("utf-8"), salt=salt, n=2**14, r=8, p=1)
    return f"{base64.b64encode(salt).decode()}${base64.b64encode(derived_key).decode()}"


def verify_password(password: str, stored_hash: str) -> bool:
    try:
        encoded_salt, encoded_key = stored_hash.split("$", 1)
        salt = base64.b64decode(encoded_salt)
        expected_key = base64.b64decode(encoded_key)
        actual_key = hashlib.scrypt(password.encode("utf-8"), salt=salt, n=2**14, r=8, p=1)
        return hmac.compare_digest(actual_key, expected_key)
    except (ValueError, TypeError):
        return False


def create_jwt(email: str) -> str:
    payload = {
        "sub": email,
        "exp": datetime.now(timezone.utc) + timedelta(days=JWT_EXPIRY_DAYS),
        "iat": datetime.now(timezone.utc),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

@app.get("/users")
def users():
    with Session(engine) as session:
        accounts = session.exec(select(Users)).all()
    return [
        {"fullname": account.fullname, "email": account.email, "whatsapp_number": account.whatsapp_number}
        for account in accounts
    ]

@app.post("/users", status_code=201)
def add_user(user: UserCreate):
    if len(user.password) < 8:
        raise HTTPException(status_code=422, detail="Password must be at least 8 characters.")

    normalized_whatsapp = re.sub(r"[^0-9+]", "", user.whatsapp_number.strip())
    if not re.fullmatch(r"\+?[1-9]\d{7,14}", normalized_whatsapp):
        raise HTTPException(status_code=422, detail="Enter a valid WhatsApp number, including country code.")

    with Session(engine) as session:
        existing_user = session.get(Users, user.email.lower().strip())
        if existing_user and existing_user.password_hash:
            raise HTTPException(status_code=409, detail="An account with this email already exists.")

        new_user = existing_user or Users(email=user.email.lower().strip(), fullname=user.fullname.strip())
        new_user.fullname = user.fullname.strip()
        new_user.whatsapp_number = normalized_whatsapp
        new_user.password_hash = hash_password(user.password)
        session.add(new_user)
        session.commit()
        return {"fullname": new_user.fullname, "email": new_user.email, "whatsapp_number": new_user.whatsapp_number}
    
@app.post("/requests")
def add_request(userRequest: UserRequest):
    with Session(engine) as session:
        try:
            request = Requests(
                email=userRequest.email,
                service=userRequest.service,
                details=userRequest.details,
            )
            session.add(request)
            session.commit()
            session.refresh(request)

            return {"message": "Request submitted successfully"}

        except IntegrityError as e:
            session.rollback()
            print(f"Integrity error in add_request: {e}")
            raise HTTPException(
                status_code=409,
                detail="There was a conflict saving your request. Please try again.",
            )

        except Exception as e:
            session.rollback()
            print(f"Unexpected error in add_request: {e}")
            raise HTTPException(
                status_code=500,
                detail="Something went wrong while processing your request. Please try again later.",
            )

@app.post("/auth/login")
def login(payload: LoginRequest):
    with Session(engine) as session:
        existing_user = session.exec(
            select(Users).where(Users.email == payload.email.lower().strip())
        ).first()

        if not existing_user or not existing_user.password_hash or not verify_password(payload.password, existing_user.password_hash):
            raise HTTPException(
                status_code=401,
                detail="Incorrect email or password.",
            )

        token = create_jwt(existing_user.email)
        return {"token": token, "email": existing_user.email, "fullname": existing_user.fullname}

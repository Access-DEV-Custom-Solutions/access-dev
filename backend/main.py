import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from sqlmodel import Field, Session, SQLModel, create_engine, select
from sqlalchemy.exc import IntegrityError
from sqlalchemy import Column, DateTime
from datetime import datetime, timedelta, timezone
from typing import Optional
import random
import smtplib
import jwt
from email.mime.text import MIMEText

class OTP(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True)
    code: str
    expires_at: datetime = Field(sa_column=Column(DateTime(timezone=True)))
    used: bool = Field(default=False)

class Users(SQLModel, table=True):
    fullname: str = Field(index=True)
    email: str = Field(index=True, primary_key=True)

class Requests(SQLModel, table=True):
    email: str = Field(index=True, primary_key=True)
    service: str = Field(index=True)
    details: str = Field(index=True)


class UserRequest(SQLModel):
    fullname: str 
    email: str 
    service: str
    details: str

class OTPRequest(SQLModel):
    email: str

class OTPVerify(SQLModel):
    email: str
    code: str

load_dotenv()
CONNECTION_STRING = os.environ.get("DB_URL")


GMAIL_ADDRESS = os.environ.get("GMAIL_ADDRESS")
GMAIL_APP_PASSWORD = os.environ.get("GMAIL_APP_PASSWORD")
JWT_SECRET = os.environ.get("JWT_SECRET")
JWT_ALGORITHM = "HS256"
OTP_EXPIRY_MINUTES = 10
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

# helper functions for OTP
def generate_otp_code() -> str:
    return f"{random.randint(0, 999999):06d}"


def send_otp_email(to_email: str, code: str):
    msg = MIMEText(f"Your Access Dev verification code is: {code}\n\nThis code expires in {OTP_EXPIRY_MINUTES} minutes.")
    msg["Subject"] = "Your verification code"
    msg["From"] = GMAIL_ADDRESS
    msg["To"] = to_email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(GMAIL_ADDRESS, GMAIL_APP_PASSWORD)
        server.sendmail(GMAIL_ADDRESS, to_email, msg.as_string())


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
        users = session.exec(select(Users)).all()
    return users

@app.post("/users")
def add_user(user: Users):
    with Session(engine) as session:
        session.add(user)
        session.commit()
        session.refresh(user)
        return user
    
@app.post("/requests")
def add_request(userRequest: UserRequest):
    with Session(engine) as session:
        try:
            # Check if user already exists
            existing_user = session.exec(
                select(Users).where(Users.email == userRequest.email)
            ).first()

            if not existing_user:
                user = Users(fullname=userRequest.fullname, email=userRequest.email)
                session.add(user)
                session.flush()  # ensures user is inserted before request references it, if needed

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

@app.post("/auth/request-otp")
def request_otp(payload: OTPRequest):
    with Session(engine) as session:
        existing_user = session.exec(
            select(Users).where(Users.email == payload.email)
        ).first()

        if not existing_user:
            raise HTTPException(
                status_code=404,
                detail="No account found with this email. Please sign up first.",
            )

        code = generate_otp_code()
        expires_at = datetime.now(timezone.utc) + timedelta(minutes=OTP_EXPIRY_MINUTES)

        try:
            otp = OTP(email=payload.email, code=code, expires_at=expires_at)
            session.add(otp)
            session.commit()

            send_otp_email(payload.email, code)

            return {"message": "OTP sent to your email"}

        except Exception as e:
            session.rollback()
            print(f"Error sending OTP: {e}")
            raise HTTPException(
                status_code=500,
                detail="Could not send verification code. Please try again.",
            )


@app.post("/auth/verify-otp")
def verify_otp(payload: OTPVerify):
    with Session(engine) as session:
        otp = session.exec(
            select(OTP)
            .where(OTP.email == payload.email)
            .where(OTP.code == payload.code)
            .where(OTP.used == False)
            .order_by(OTP.id.desc())
        ).first()

        if not otp:
            raise HTTPException(status_code=400, detail="Invalid code.")

        if otp.expires_at < datetime.now(timezone.utc):
            raise HTTPException(status_code=400, detail="Code has expired. Please request a new one.")

        otp.used = True
        session.add(otp)
        session.commit()

        token = create_jwt(payload.email)
        return {"token": token, "email": payload.email}
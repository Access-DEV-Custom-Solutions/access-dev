import os
from fastapi import FastAPI
from dotenv import load_dotenv
from sqlmodel import Field, Session, SQLModel, create_engine, select

class Users(SQLModel, table=True):
    firstname: str = Field(index=True)
    lastname: str = Field(index=True)
    email: str = Field(index=True, primary_key=True)

load_dotenv()
CONNECTION_STRING = os.environ.get("DB_URL")

app = FastAPI()
engine = create_engine(CONNECTION_STRING, connect_args={"sslmode": "require"}, pool_recycle=300)

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

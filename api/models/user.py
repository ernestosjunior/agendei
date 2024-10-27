from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String
from typing import List
from utils.password import get_password_hash


class UserBase(SQLModel):
    name: str
    email: str = Field(sa_column=Column("email", String, unique=True))
    password: str

    def set_password(self, password: str):
        self.password = get_password_hash(password)

class User(UserBase, table=True):
    id:  int | None = Field(default=None, primary_key=True)

    appointments: List["Appointment"] = Relationship(back_populates="user")

class UserCreate(UserBase):
    pass

class UserUpdate(UserBase):
    name: str
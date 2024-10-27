from sqlmodel import SQLModel, Field, Relationship
from typing import Optional
from datetime import date

class AppointmentBase(SQLModel):
    date: date
    hour: str
    service_id: int = Field(foreign_key="service.id")
    doctor_id: int = Field(foreign_key="doctor.id")

class Appointment(AppointmentBase, table=True):
    id: int = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")

    service: Optional["Service"] = Relationship(back_populates="appointments")
    doctor: Optional["Doctor"] = Relationship(back_populates="appointments")
    user: Optional["User"] = Relationship(back_populates="appointments")

class AppointmentCreate(AppointmentBase):
    pass
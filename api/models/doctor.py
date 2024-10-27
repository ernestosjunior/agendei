from sqlmodel import SQLModel, Field, Relationship
from .gender import Gender
from typing import List

class DoctorBase(SQLModel):
    name: str
    specialty: str
    icon: Gender

class Doctor(DoctorBase, table=True):
    id:  int | None = Field(default=None, primary_key=True)

    doctor_services: List["DoctorService"] = Relationship(back_populates="doctor")
    appointments: List["Appointment"] = Relationship(back_populates="doctor")

class DoctorCreate(DoctorBase):
    pass
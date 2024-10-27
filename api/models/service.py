from sqlmodel import SQLModel, Field, Relationship
from typing import List

class ServiceBase(SQLModel):
    description: str

class Service(ServiceBase, table=True):
    id:  int | None = Field(default=None, primary_key=True)

    service_doctors: List["DoctorService"] = Relationship(back_populates="service")
    appointments: List["Appointment"] = Relationship(back_populates="service")

class ServiceCreate(ServiceBase):
    pass

class ServiceUpdate(ServiceBase):
    description: str | None = None
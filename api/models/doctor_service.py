from sqlmodel import SQLModel, Field, Relationship
from typing import Optional
from .doctor import Doctor
from .service import Service

class DoctorServiceBase(SQLModel):
    doctor_id: int = Field(foreign_key="doctor.id")
    service_id: int = Field(foreign_key="service.id")
    price: float

class DoctorService(DoctorServiceBase, table=True):
    id: int = Field(default=None, primary_key=True)

    doctor: Optional[Doctor] = Relationship(back_populates="doctor_services")
    service: Optional[Service] = Relationship(back_populates="service_doctors")

class DoctorServiceCreate(DoctorServiceBase):
    pass
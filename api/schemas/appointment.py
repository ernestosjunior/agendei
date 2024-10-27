from pydantic import BaseModel
from datetime import date
from .doctor import Doctor
from .service import Service

class AppointmentWithDoctorAndService(BaseModel):
    id: int
    hour: str
    date: date
    doctor: Doctor
    service: Service
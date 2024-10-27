from pydantic import BaseModel
from models.doctor import Doctor
from typing import List
from .service import ServiceWithPrice

class DoctorServiceResponse(BaseModel):
    doctor: Doctor
    services: List[ServiceWithPrice]

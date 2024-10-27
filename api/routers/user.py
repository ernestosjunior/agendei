from fastapi import APIRouter, HTTPException
from models.user import User, UserCreate
from models.doctor import Doctor
from models.service import Service
from models.doctor_service import DoctorService
from config.database import SessionDep
from schemas.user import UserResponse
from schemas.appointment import AppointmentWithDoctorAndService
from sqlmodel import select
from models.appointment import Appointment
from config.auth import CurrentUserDep
from datetime import timedelta
import os
from utils.token import create_access_token
from schemas.token import Token
from typing import List

router = APIRouter(prefix='/users', tags=['users'])

@router.post("/")
def create_user(user: UserCreate, session: SessionDep) -> Token:
    db_user = session.exec(select(User).where(User.email == user.email)).first()

    if db_user is not None:
        raise HTTPException(status_code=409, detail="User already exists")

    _user = User(name=user.name, email=user.email)

    _user.set_password(user.password)

    session.add(_user)
    session.commit()
    session.refresh(_user)

    _user_data = {
        "id": _user.id,
        "name": _user.name,
        "email": _user.email
    }

    access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")))
    
    access_token = create_access_token(
        data={"sub": _user.id}, expires_delta=access_token_expires
    )
   
    return Token(access_token=access_token, token_type="bearer", user=_user_data)

@router.get("/")
def get_user(current_user: CurrentUserDep) -> UserResponse:
    _user = current_user.__dict__.copy()
    _user.pop("password", None)

    return _user

@router.get("/appointments/")
def get_user_appointments(user: CurrentUserDep, session: SessionDep) -> List[AppointmentWithDoctorAndService]:
    appointments = (
        session.exec(select(Appointment).join(Doctor).join(Service).join(DoctorService).where(Appointment.user_id == user.id).distinct()).all()
    )

    return [
            dict(
                id=appointment.id,
                hour=appointment.hour,
                date=appointment.date,
                doctor=dict(
                    id=appointment.doctor.id,
                    name=appointment.doctor.name,
                    specialty=appointment.doctor.specialty
                ),
                service=dict(
                    id=appointment.service.id,
                    description=appointment.service.description,
                ),
            ) for appointment in appointments
        ]
    
    
    
    
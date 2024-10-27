from fastapi import APIRouter, HTTPException
from models.appointment import AppointmentCreate, Appointment
from config.database import SessionDep
from schemas.response import SuccessResponse
from config.auth import CurrentUserDep
from models.service import Service
from models.doctor import Doctor

router = APIRouter(prefix="/appointments", tags=["appointments"])

@router.post("/")
def create_appointment(appointment: AppointmentCreate, session: SessionDep, current_user: CurrentUserDep) -> Appointment:
    appointment_with_user = appointment.model_copy(update={"user_id": current_user.id})
    db_appointment = Appointment(**appointment_with_user.__dict__)
    session.add(db_appointment)
    session.commit()
    session.refresh(db_appointment)
    
    return db_appointment

@router.delete("/{appointment_id}/")
def cancel_appointment(appointment_id: int, session: SessionDep) -> SuccessResponse:
    appointment = session.get(Appointment, appointment_id)

    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    
    session.delete(appointment)
    session.commit()

    return SuccessResponse(success=True)
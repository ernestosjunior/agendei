from fastapi import APIRouter, HTTPException
from models.doctor import Doctor, DoctorCreate
from models.service import Service
from models.doctor_service import DoctorService
from config.database import SessionDep
from sqlmodel import select
from schemas.response import SuccessResponse
from schemas.doctor_service import DoctorServiceResponse

router = APIRouter(prefix='/doctors', tags=['doctors'])

@router.post("/")
def create_doctor(doctor: DoctorCreate, session: SessionDep) -> Doctor:
    db_doctor = Doctor.model_validate(doctor)
    session.add(db_doctor)
    session.commit()
    session.refresh(db_doctor)
    
    return db_doctor

@router.get("/")
def list_doctors(session: SessionDep) -> list[Doctor]:
    doctors = session.exec(select(Doctor)).all()

    return doctors

@router.get("/{doctor_id}/")
def get_doctor(doctor_id: int, session: SessionDep) -> Doctor:
    doctor = session.get(Doctor, doctor_id)

    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    
    return doctor

@router.delete("/{doctor_id}/")
def delete_doctor(doctor_id: int, session: SessionDep) -> SuccessResponse:
    doctor = session.get(Doctor, doctor_id)

    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    
    session.delete(doctor)
    session.commit()

    return SuccessResponse(success=True)

@router.get("/{doctor_id}/services")
def list_doctor_services(doctor_id: int, session: SessionDep) -> DoctorServiceResponse:
    doctor = session.get(Doctor, doctor_id)

    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")
    
    doctor_services = (
        session.exec(
            select(DoctorService)
            .join(Service)
            .where(DoctorService.doctor_id == doctor.id)
        ).all()
    )

    return dict(
        doctor=doctor, 
        services=[
            dict(
                id=doctor_service.service.id, 
                description=doctor_service.service.description, 
                price=doctor_service.price
            ) for doctor_service in doctor_services
        ]
    )
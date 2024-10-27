from fastapi import APIRouter
from models.doctor_service import DoctorServiceCreate, DoctorService
from config.database import SessionDep

router = APIRouter(prefix="/doctors-services", tags=["doctors_services"])

@router.post("/")
def associate_doctor_with_service(doctor_service: DoctorServiceCreate, session: SessionDep) -> DoctorService:
    db = DoctorService.model_validate(doctor_service)
    session.add(db)
    session.commit()
    session.refresh(db)
    return db
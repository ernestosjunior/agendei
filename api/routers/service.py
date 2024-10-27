from fastapi import APIRouter, HTTPException
from models.service import Service, ServiceCreate, ServiceUpdate
from config.database import SessionDep
from sqlmodel import select

router = APIRouter(prefix="/services", tags=["services"])

@router.post("/")
def create_service(service: ServiceCreate, session: SessionDep) -> Service:
    db_service = Service.model_validate(service)
    session.add(db_service)
    session.commit()
    session.refresh(db_service)

    return db_service

@router.get("/")
def list_services(session: SessionDep) -> list[Service]:
    services = session.exec(select(Service)).all()

    return services

@router.get("/{service_id}/")
def get_service(service_id: int, session: SessionDep) -> Service:
    service = session.get(Service, service_id)

    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    return service

@router.patch("/{service_id}/")
def update_service(service_id: int, service: ServiceUpdate, session: SessionDep) -> Service:
    db_service = session.get(Service, service_id)

    if not db_service:
        raise HTTPException(status_code=404, detail="Service not found")
    
    service_data = service.model_dump(exclude_unset=True)
    db_service.sqlmodel_update(service_data)

    session.add(db_service)
    session.commit()
    session.refresh(db_service)

    return db_service
    

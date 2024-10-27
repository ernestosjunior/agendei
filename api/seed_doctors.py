from sqlmodel import create_engine, Session, select
from models.doctor import Doctor
import os

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)

doctors = [
    {"id": 1, "name": "Dr. Armando Matheus", "specialty": "Ginecologia e obstetrícia", "icon": "M"},
    {"id": 2, "name": "Dra. Ana Beatriz Rutini", "specialty": "Cardiologista", "icon": "F"},
    {"id": 3, "name": "Dr. Antônio Almeida Souza", "specialty": "Pediatria", "icon": "M"},
    {"id": 4, "name": "Dra. Roberta Martins", "specialty": "Clínica Geral", "icon": "F"},
    {"id": 5, "name": "Dra. Nise da Silveira", "specialty": "Cirurgia Plástica", "icon": "F"},
    {"id": 6, "name": "Dr. Jonatan Silvestre", "specialty": "Pediatria", "icon": "M"},
    {"id": 7, "name": "Dr. José Eduardo Souza", "specialty": "Clínica Geral", "icon": "M"},
    {"id": 8, "name": "Dra. Adriana Melo", "specialty": "Clínica Geral", "icon": "F"},
    {"id": 9, "name": "Dra. Valeria Petri", "specialty": "Cirurgia Plástica", "icon": "F"},
]

def get_or_create(session, model, **kwargs):
    instance = session.exec(select(model).where(*[getattr(model, k) == v for k, v in kwargs.items()])).first()
    if not instance:
        instance = model(**kwargs)
        session.add(instance)
    return instance

def seed_doctors():
    with Session(engine) as session:
        for doctor_data in doctors:
            get_or_create(session, Doctor, **doctor_data)
        session.commit()

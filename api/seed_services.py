from sqlmodel import create_engine, Session, select
from models.service import Service
import os

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)

services = [
  {
    "id": 1,
    "description": "Consulta Médica",
  },
  {
    "id": 2,
    "description": "Drenagem Linfática",
  },
  {
    "id": 3,
    "description": "Lipoaspiração",
  },
  {
    "id": 4,
    "description": "Mamoplastia",
  },
];

def get_or_create(session, model, **kwargs):
    instance = session.exec(select(model).where(*[getattr(model, k) == v for k, v in kwargs.items()])).first()
    if not instance:
        instance = model(**kwargs)
        session.add(instance)
    return instance

def seed_services():
    with Session(engine) as session:
        for data in services:
            get_or_create(session, Service, **data)
        session.commit()

from models import *
from fastapi import FastAPI
from dotenv import load_dotenv
from config.database import create_db_and_tables
from routers import doctor, user, service, doctor_service, appointment, auth
from fastapi.middleware.cors import CORSMiddleware
from config.cors import origins, allow_credentials, allow_methods, allow_headers
from seed_doctors import seed_doctors
from seed_services import seed_services

load_dotenv()

create_db_and_tables()
seed_doctors()
seed_services()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=allow_credentials,
    allow_methods=allow_methods,
    allow_headers=allow_headers,
)

app.include_router(doctor.router)
app.include_router(user.router)
app.include_router(service.router)
app.include_router(doctor_service.router)
app.include_router(appointment.router)
app.include_router(auth.router)
from fastapi import APIRouter
from schemas.token import Token
from fastapi import HTTPException, status
from utils.auth import authenticate_user
from schemas.auth import LoginRequest
from config.database import SessionDep
from sqlmodel import select
from models.user import User
from datetime import timedelta
import os
from utils.token import create_access_token

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/token/")
def login_for_access_token(
    login_data: LoginRequest, session: SessionDep
) -> Token:
    db_user = session.exec(select(User).where(User.email == login_data.email)).first()
    user = authenticate_user(db_user, login_data.password)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")))
    
    access_token = create_access_token(
        data={"sub": user.id}, expires_delta=access_token_expires
    )

    _user = db_user.__dict__.copy()
    _user.pop("password", None)

    return Token(access_token=access_token, token_type="bearer", user=_user)
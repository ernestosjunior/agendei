from typing import Annotated
from config.oauth import oauth2_scheme
from fastapi import Depends, HTTPException, status
import jwt
import os
from schemas.token import TokenData
from jwt.exceptions import InvalidTokenError
from config.database import Session, engine
from models.user import User

async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, os.getenv("SECRET_KEY"), algorithms=[os.getenv("ALGORITHM")])
        _user_id: str = payload.get("sub")

        if _user_id is None:
            raise credentials_exception
        
        token_data = TokenData(user_id=_user_id)

    except InvalidTokenError:
        raise credentials_exception
    
    with Session(engine) as session:
        user_id = token_data.user_id
        user = session.get(User, user_id)
        
        if user is None:
            raise credentials_exception
        return user

CurrentUserDep =  Annotated[User, Depends(get_current_user)]
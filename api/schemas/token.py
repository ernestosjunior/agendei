from pydantic import BaseModel
from typing import Optional
from models.user import User

class Token(BaseModel):
    access_token: str
    token_type: str
    user: Optional[User]

class TokenData(BaseModel):
    user_id: int | None = None
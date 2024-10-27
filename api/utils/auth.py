from models.user import User
from .password import verify_password

def authenticate_user(user: User, plain_password: str):
    if not user:
        return False
    if not verify_password(plain_password, user.password):
        return False
    return user
from pydantic import BaseModel

class Service(BaseModel):
    id: int
    description: str

class ServiceWithPrice(BaseModel):
    id: int
    description: str
    price: float
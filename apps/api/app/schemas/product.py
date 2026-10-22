
from pydantic import BaseModel, Field


class ProductCreate(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    description: str = Field(min_length=5)
    status: str = "Prototype"
    cta: str = "Request Demo"


class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    status: str
    cta: str

    class Config:
        from_attributes = True

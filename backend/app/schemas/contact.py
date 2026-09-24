from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    project_type: str = Field(..., min_length=2, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    project_type: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

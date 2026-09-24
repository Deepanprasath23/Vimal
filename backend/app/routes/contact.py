from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate, ContactResponse

router = APIRouter()

@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def create_contact_message(
    payload: ContactCreate,
    db: Session = Depends(get_db)
):
    try:
        new_message = ContactMessage(
            name=payload.name,
            email=payload.email,
            project_type=payload.project_type,
            message=payload.message
        )
        db.add(new_message)
        db.commit()
        db.refresh(new_message)
        return new_message
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred while submitting your message: {str(e)}"
        )

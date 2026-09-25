from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from apps.api.app.db.session import SessionLocal
from apps.api.app.models.lead import Lead
from apps.api.app.schemas.lead import LeadCreate

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    new_lead = Lead(
        name=lead.name,
        email=lead.email,
        message=lead.message
    )

    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)

    return {
        "message": "Lead saved successfully",
        "id": new_lead.id
    }
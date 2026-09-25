from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from apps.api.app.db.session import SessionLocal
from apps.api.app.services.products.product_service import get_products

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/")
def products(db: Session = Depends(get_db)):
    return get_products(db)
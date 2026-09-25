from sqlalchemy.orm import Session

from apps.api.app.models.service import Service


def get_services(db: Session):
    return db.query(Service).all()
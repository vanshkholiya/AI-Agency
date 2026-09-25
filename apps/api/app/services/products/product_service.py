from sqlalchemy.orm import Session

from apps.api.app.models.product import Product


def get_products(db: Session):
    return db.query(Product).all()
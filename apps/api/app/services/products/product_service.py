
from sqlalchemy.orm import Session

from apps.api.app.models.product import Product


def get_products(db: Session):
    return db.query(Product).all()


def update_product(
    db: Session,
    product_id: int,
    name: str | None = None,
    description: str | None = None,
    status: str | None = None,
    cta: str | None = None,
):
    product = db.query(Product).filter(Product.id == product_id).first()

    if product is None:
        return None

    if name is not None:
        product.name = name
    if description is not None:
        product.description = description
    if status is not None:
        product.status = status
    if cta is not None:
        product.cta = cta

    db.commit()
    db.refresh(product)
    return product


def delete_product(db: Session, product_id: int):
    product = db.query(Product).filter(Product.id == product_id).first()

    if product is None:
        return False

    db.delete(product)
    db.commit()
    return True

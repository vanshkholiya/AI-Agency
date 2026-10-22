
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from apps.api.app.db.session import SessionLocal
from apps.api.app.models.product import Product
from apps.api.app.services.products.product_service import (
    get_products,
    update_product,
    delete_product,
)
from apps.api.app.schemas.product import ProductCreate, ProductResponse

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=list[ProductResponse])
def products(db: Session = Depends(get_db)):
    return get_products(db)


@router.post(
    "/",
    response_model=ProductResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(
        name=product.name,
        description=product.description,
        status=product.status,
        cta=product.cta,
    )

    try:
        db.add(new_product)
        db.commit()
        db.refresh(new_product)
        return new_product
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Product could not be created",
        )


@router.put("/{product_id}", response_model=ProductResponse)
def edit_product(
    product_id: int,
    product: ProductCreate,
    db: Session = Depends(get_db),
):
    updated_product = update_product(
        db=db,
        product_id=product_id,
        name=product.name,
        description=product.description,
        status=product.status,
        cta=product.cta,
    )

    if updated_product is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )

    return updated_product


@router.delete("/{product_id}")
def remove_product(
    product_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_product(db, product_id)

    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )

    return {"message": "Product deleted successfully"}

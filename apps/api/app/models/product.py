from sqlalchemy import Column, Integer, String, Text
from apps.api.app.db.base import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    description = Column(Text, nullable=False)
    status = Column(String(50), nullable=False, default="Prototype")
    cta = Column(String(50), nullable=False, default="Request Demo")
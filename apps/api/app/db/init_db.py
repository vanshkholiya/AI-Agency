from apps.api.app.db.base import Base
from apps.api.app.db.session import engine

from apps.api.app.models.lead import Lead
from apps.api.app.models.product import Product
from apps.api.app.models.service import Service


def init_db():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    init_db()
    print("Database tables created successfully")
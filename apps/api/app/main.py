from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from apps.api.app.api.routes import products
from apps.api.app.api.routes import services
from apps.api.app.api.routes import leads

app = FastAPI(title="AI Agency API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router, prefix="/products", tags=["Products"])
app.include_router(services.router, prefix="/services", tags=["Services"])
app.include_router(leads.router, prefix="/leads", tags=["Leads"])


@app.get("/")
def root():
    return {"message": "AI Agency API is running"}
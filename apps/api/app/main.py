from fastapi import FastAPI

app = FastAPI(title="AI Agency API")


@app.get("/")
def root():
    return {"message": "AI Agency API is running"}
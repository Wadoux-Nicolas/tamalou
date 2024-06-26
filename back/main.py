from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langserve import add_routes
from pydantic import BaseModel

from src.chain import create_chain

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


class InputRequest(BaseModel):
    input: str


add_routes(app, create_chain())

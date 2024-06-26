from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langserve import add_routes
from pydantic import BaseModel

from src.chain import create_chain
from src.classification import classification

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

messages = []


class InputRequest(BaseModel):
    input: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/message")
def read_item(input_request: InputRequest):
    output = classification(input_request.input)
    messages.append({"message": input_request.input, "catégorie": output["labels"]})

    return {"input": input_request.input, "output": output}


@app.get("/messages")
def read_item():
    return messages


add_routes(app, create_chain())

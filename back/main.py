from typing import Optional
from fastapi import FastAPI,Query
from fastapi.middleware.cors import CORSMiddleware
from langserve import add_routes
from pydantic import BaseModel
from datetime import datetime

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
    role: str
    date: datetime
    shouldBeAnalyzed: bool

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/message")
def post_message(input_request: InputRequest):
    output = {"labels": "none"}

    if input_request.shouldBeAnalyzed:
        output = classification(input_request.input)

    messages.append({"message": input_request.input, "catégorie": output["labels"], "role": input_request.role, "date": datetime.now()})
    print("Messages:", messages)

    return {"input": input_request.input, "output": output, "role": input_request.role,"date": datetime.now()}

@app.get("/messages")
def get_messages(date: Optional[datetime] = Query(None)):
    if date:
        message_filter = [msg for msg in messages if msg['date'].date() == date.date()]
        return message_filter
    return messages


add_routes(app, create_chain())

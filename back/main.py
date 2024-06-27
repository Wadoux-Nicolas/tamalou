from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain_core.documents.base import Document
from pydantic import BaseModel, Field

from src.chain import create_chain
from src.message import Message

app = FastAPI()
messages: list[Message] = []
chain = create_chain()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class InputRequest(BaseModel):
    input: str = Field(min_length=1)
    role: str = Field(min_length=1)
    should_be_analyzed: bool


@app.post("/message")
def post_message(input_request: InputRequest):
    message = Message(
        input_request.input,
        input_request.role,
        input_request.should_be_analyzed,
    )

    messages.append(message)

    return message


@app.get("/messages")
def get_messages():
    return messages


@app.get("/summary")
def get_summary():
    all_messages = "\n".join(
        [f"{message.role}: {message.content}" for message in messages]
    )

    docs = [Document(all_messages)]
    return chain.invoke(docs)

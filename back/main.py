from src.classification import classification
from fastapi import FastAPI
from pydantic import BaseModel

from src.generate_summary import generate_summary

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

class InputRequest(BaseModel):
    input: str
    
messages = []

@app.post("/summarize")
def read_item(input_request: InputRequest):
    output = generate_summary(input_request.input)
    return {"input": input_request.input, "output": output,}


@app.post("/message")
def read_item(input_request: InputRequest):
    output = classification(input_request.input)
    messages.append({"message":input_request.input , "catégorie": output['labels']})
    print("Messages:", messages)
    return {"input": input_request.input, "output": output}


@app.get("/messages")
def read_item():
    return messages


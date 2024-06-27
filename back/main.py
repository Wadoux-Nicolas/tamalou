import random
from datetime import datetime
from typing import Optional

from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from langchain_core.documents.base import Document
from pydantic import BaseModel
from pydantic import Field

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
        content=input_request.input,
        role=input_request.role,
        should_be_analyzed=input_request.should_be_analyzed,
    )

    messages.append(message)

    return message


@app.get("/messages")
def get_messages(date: Optional[datetime] = Query(None)):
    if date:
        message_filter = [msg for msg in messages if msg.date >= date]
        return message_filter
    return messages


@app.get("/summary")
def get_summary():
    all_messages = "\n".join(
        [f"{message.role}: {message.content}" for message in messages]
    )

    docs = [Document(all_messages)]
    summary = chain.invoke(docs)["output_text"]
    return {"summary": summary}


class Notification(BaseModel):
    amount: int
    content: str


@app.get("/notifications")
def get_notifications() -> dict[str, Notification]:
    return {
        "bandage": Notification(
            amount=random.randint(0, 5),
            content="Soignez vos blessures en appliquant soigneusement des pansements stériles sur les zones touchées. Assurez-vous de bien nettoyer et d'appliquer un peu de gel ou de crème pour aider la guérison.",
        ),
        "medication": Notification(
            amount=random.randint(0, 5),
            content="Prenez vos médicaments comme prescrits par votre médecin, en veillant à ne pas oublier de prendre une dose. Assurez-vous de lire les étiquettes et de demander des informations supplémentaires si vous avez des questions.",
        ),
        "meals": Notification(
            amount=random.randint(0, 5),
            content="Préparez vos repas avec soin en sélectionnant des aliments sains et variés. Assurez-vous d'avoir suffisamment de temps pour manger paisiblement et de ne pas oublier de boire régulièrement.",
        ),
        "exercise": Notification(
            amount=random.randint(0, 5),
            content="Faites de l'exercice régulièrement pour améliorer votre santé et votre bien-être. Choisissez des activités qui vous plaisent, comme la marche, le yoga ou le sport, et ajustez-y votre intensité en fonction de vos besoins.",
        ),
        "rest": Notification(
            amount=random.randint(0, 5),
            content="Donnez-vous du temps pour vous reposer et vous détendre. Profitez de moments de relaxation pour vous éloigner des écrans et des distractions, et laissez-vous aller dans un état de bien-être.",
        ),
    }

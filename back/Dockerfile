FROM python:3.12

WORKDIR /src/app

RUN pip install --upgrade pip

RUN pip install torch --index-url https://download.pytorch.org/whl/cpu

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD fastapi run main.py

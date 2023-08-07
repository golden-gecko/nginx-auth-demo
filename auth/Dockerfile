FROM python:3.11.4-alpine

WORKDIR /opt

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY src .

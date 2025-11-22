FROM node:20-alpine3.17

WORKDIR /opt

RUN npm install -g @angular/cli

COPY package*.json .

RUN npm install

COPY src src
COPY *.json .

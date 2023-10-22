FROM node:16-slim

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 5000 

ENTRYPOINT npm start
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

ENV DEV_APP_PORT 8000

ENV DEV_DB_HOST localhost

ENV DEV_DB_PORT 27017

ENV DEV_DB_NAME libDEV

CMD ["node", "server.js"]
# Library Management Backend

## Team members
- Nguyễn Hồng Sơn
- Lê Hồng Ưng
- Hà Mạnh Hùng

## Steps
- Step 1: Clone this repository
```
git clone https://github.com/sonnguyenhong/library-management-backend
```
- Step 2: Open project in terminal and install all dependencies
```
npm install 
```
- Step 3: Create .env file and copy content from .env.example file to this new .env file. Change the value of each key if necessary.

- Step 4: Run the server
```
npm run dev 
```
or
```
npm start
```

## Steps to dockerize project
- Step 1: Create Dockerfile in the root folder and this is the content of Dockerfile
```
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
```

- Step 2: Create docker image by building this Dockerfile 
```
docker build -t <<IMAGE_NAME>> .
```

- Step 3: Create container by running this docker image
```
docker run -p <<LOCAL_PORT>>:<<CONTAINER_PORT>> --network="host" <<IMAGE_NAME>>
```
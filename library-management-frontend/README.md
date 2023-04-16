# Getting Started with Library Management Fontend

## Setup and run

- **Step 1:** Clone the project:

    ##### `git clone https://github.com/UngLH/library-management-fontend.git`

- **Step 2:** Install package for project

  ##### `npm install`

- **Step 3:** Run project

  ##### `npm run start`

  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Steps to dockerize project

- **Step 1:** Create Dockerfile in the root folder and this is the content of Dockerfile

```
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM node:18-alpine as runner
WORKDIR /app
COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
```

- **Step 2:** Create docker image by building this Dockerfile

```
docker build -t <<IMAGE_NAME>> .
```
 > example: *```docker build -t library-management-fe```*

- **Step 3:** Create container by running this docker image

```
docker run -dp <<LOCAL_PORT>>:<<CONTAINER_PORT>> <<IMAGE_NAME>>
```
 > example: ```docker run -dp 3000:3000 library-managerment-fe```

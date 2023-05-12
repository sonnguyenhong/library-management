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

## Caution when seeding data
When you run npm install, it will install the package mongoose-seed (along with many packages) to help you seed data to database.
This package use many deprecated methods of mongoose so you will have to modify it a little bit.

In the node_modules/mongoose-seed/index.js file:
1. Comment the 2 line 53 and 54 (mongoose in the new version doesn't have these options anymore)
```
// mongoose.set("useCreateIndex", true);
// mongoose.set("useNewUrlParser", true);
``` 
2. The connect method from line 69: (mongoose in the new version doesn't use callback in the connect method)
```
mongoose.connect(db, opts).then(response => {
    _this.connected = true;
    consoleLog(_this, 'Successfully initialized mongoose-seed');
    cb();
}).catch(err => {
    console.error(chalk.red('Could not connect to MongoDB!'));
    consoleLog(_this, err);
});
```
3. Same reason as connect method, the delete and create method of mongoose don't use callback.
- Change delete code at line 146 to:
```
Model.deleteMany({}).then(response => {
    consoleLog(_this, modelName + 's collection cleared');
    done();
}).catch(err => {
    console.error(chalk.red('Error: ' + err.message));
    return;
})
```
- Change create code at line 190 to: 
```
Model.create(document).then(response => {
    consoleLog(_this, 'Successfully created document [' + j + '] of ' + entry.model + ' model');
}).catch(err => {
    console.error(chalk.red('Error creating document [' + j + '] of ' + entry.model + ' model'));
    console.error(chalk.red('Error: ' + err.message));
}).finally(() => {
    innerCallback();
});
```
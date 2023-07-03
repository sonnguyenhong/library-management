'use strict';

const mongoose = require('mongoose');
const { countConnect } = require('../helpers/check.connect');

const {db: {username, password, name}} = require('../configs/mongodb.config');

const connectString = `mongodb+srv://${username}:${password}@cluster0.iyekf6b.mongodb.net/${name}?retryWrites=true&w=majority`
console.log(connectString);
class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose
            .connect(connectString, {
                maxPoolSize: 50,
            })
            .then((_) => {
                console.log(`Connected MongoDB Successfully`);
                countConnect();
            })
            .catch((err) => console.log(`Error occured when connect to MongoDB`));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;
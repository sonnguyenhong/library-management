'use strict';

const {
    DEV_ENVIRONMENT, 
    DEFAULT_PORT, 
    DEFAULT_DB_USERNAME, 
    DEFAULT_DB_PASSWORD, 
    DEFAULT_DB_NAME 
} = require('../constants/string.constants');

const {
    NODE_ENV,
    DEV_APP_PORT, 
    DEV_DB_USERNAME, 
    DEV_DB_PASSWORD, 
    DEV_DB_NAME, 
    PRO_APP_PORT,
    PRO_DB_USERNAME,
    PRO_DB_PASSWORD, 
    PRO_DB_NAME 
} = require('../constants/env.constants');

const dev = {
    app: {
        port: DEV_APP_PORT || DEFAULT_PORT,
    },
    db: {
        username: DEV_DB_USERNAME || DEFAULT_DB_USERNAME,
        password: DEV_DB_PASSWORD || DEFAULT_DB_PASSWORD,
        name: DEV_DB_NAME || DEFAULT_DB_NAME,
    },
};

const pro = {
    app: {
        port: PRO_APP_PORT || DEFAULT_PORT,
    },
    db: {
        username: PRO_DB_USERNAME || DEFAULT_DB_USERNAME,
        password: PRO_DB_PASSWORD || DEFAULT_DB_PASSWORD,
        name: PRO_DB_NAME || DEFAULT_DB_NAME,
    },
};

const config = { dev, pro };
const env = NODE_ENV || DEV_ENVIRONMENT;
module.exports = config[env];

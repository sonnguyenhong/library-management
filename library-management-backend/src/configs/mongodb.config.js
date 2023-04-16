'use strict';

const {
    DEV_ENVIRONMENT, 
    DEFAULT_PORT, 
    DEFAULT_DB_HOST, 
    DEFAULT_DB_PORT, 
    DEFAULT_DB_NAME 
} = require('../constants/string.constants');

const {
    NODE_ENV,
    DEV_APP_PORT, 
    DEV_DB_HOST, 
    DEV_DB_PORT, 
    DEV_DB_NAME, 
    PRO_APP_PORT,
    PRO_DB_HOST,
    PRO_DB_PORT, 
    PRO_DB_NAME 
} = require('../constants/env.constants');

const dev = {
    app: {
        port: DEV_APP_PORT || DEFAULT_PORT,
    },
    db: {
        host: DEV_DB_HOST || DEFAULT_DB_HOST,
        port: DEV_DB_PORT || DEFAULT_DB_PORT,
        name: DEV_DB_NAME || DEFAULT_DB_NAME,
    },
};

const pro = {
    app: {
        port: PRO_APP_PORT || DEFAULT_PORT,
    },
    db: {
        host: PRO_DB_HOST || DEFAULT_DB_HOST,
        port: PRO_DB_PORT || DEFAULT_DB_PORT,
        name: PRO_DB_NAME || DEFAULT_DB_NAME,
    },
};

const config = { dev, pro };
const env = NODE_ENV || DEV_ENVIRONMENT;
module.exports = config[env];

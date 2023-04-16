// App constants
const DEFAULT_PORT = 8000;
const PORT = process.env.PORT || DEFAULT_PORT;
const NODE_ENV = process.env.NODE_ENV;

const DEV_APP_PORT = process.env.DEV_APP_PORT;
const DEV_DB_HOST = process.env.DEV_DB_HOST;
const DEV_DB_PORT = process.env.DEV_DB_PORT;
const DEV_DB_NAME = process.env.DEV_DB_NAME;

const PRO_APP_PORT = process.env.PRO_APP_PORT;
const PRO_DB_HOST = process.env.PRO_DB_HOST;
const PRO_DB_PORT = process.env.PRO_DB_PORT;
const PRO_DB_NAME = process.env.PRO_DB_NAME;

module.exports = {
    PORT,
    NODE_ENV,
    DEV_APP_PORT,
    DEV_DB_HOST,
    DEV_DB_PORT,
    DEV_DB_NAME,
    PRO_APP_PORT,
    PRO_DB_HOST,
    PRO_DB_PORT,
    PRO_DB_NAME
};

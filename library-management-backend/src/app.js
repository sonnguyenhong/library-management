const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const { StatusCodes, ReasonPhrases } = require('./constants/httpStatusCodes');
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// init db
require('./dbs/init.mongodb');

// init routes
app.use('/', require('./routes'));

// handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR
    });
})

module.exports = app;
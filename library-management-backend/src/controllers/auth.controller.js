'use strict';

const { CREATED, SuccessResponse } = require('../cores/success.response');
const AuthService = require('../services/auth.service');

class AuthController {
    logout = async (req, res, next) => {
        console.log('req', req);
        new SuccessResponse({
            message: 'Logout success!',
            metadata: await AuthService.logout(req.keyStore),
        }).send(res);
    };
    login = async (req, res, next) => {
        new SuccessResponse({
            metadata: await AuthService.login(req.body),
        }).send(res);
    };
}

module.exports = new AuthController();

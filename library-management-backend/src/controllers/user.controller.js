'use strict';

const { CREATED, SuccessResponse } = require('../cores/success.response');
const UserService = require('../services/user.service');

class UserController {
    getAll = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all users successfully',
            metadata: await UserService.findAll()
        }).send(res);
    };

    getById = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get user information successfully',
            metadata: await UserService.findById(req.params.id)
        }).send(res);
    };

    create = async (req, res, next) => {
        new CREATED({
            message: 'Create new user successfully',
            metadata: await UserService.create(req.body)
        }).send(res);
    };

    update = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update user successfully',
            metadata: await UserService.update(req.params.id, req.body)
        }).send(res);
    };

    remove = async (req, res, next) => {
        new SuccessResponse({
            message: 'Remove user successfully',
            metadata: await UserService.remove(req.params.id)
        }).send(res);
    };
}

module.exports = new UserController();

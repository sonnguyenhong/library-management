'use strict';

const { SuccessResponse } = require('../cores/success.response');
const BorrowReturnService = require('../services/borrowReturn.service');

class BorrowReturnController {
    getAllBorrowReturns = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all borrow returns successfully',
            metadata: await BorrowReturnService.getAllBorrowReturns()
        }).send(res);
    };

    getBorrowReturnById = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get borrow return by id successfully',
            metadata: await BorrowReturnService.getBorrowReturnById(req.params.id)
        }).send(res);
    };

    createBorrowReturn = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create borrow return successfully',
            metadata: await BorrowReturnService.createBorrowReturn(req.body)
        }).send(res);
    };

    updateBorrowReturn = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update borrow return successfully',
            metadata: await BorrowReturnService.updateBorrowReturn(req.params.id, req.body)
        }).send(res);
    }
}

module.exports = new BorrowReturnController();

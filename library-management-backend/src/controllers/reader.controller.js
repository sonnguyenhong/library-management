'use strict';

const { SuccessResponse } = require('../cores/success.response');
const ReaderService = require('../services/reader.service');

class ReaderController {
    getAllReaders = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all readers successfully',
            metadata: await ReaderService.getAllReaders()
        }).send(res);
    };

    getReaderById = async (req, res, next) => {
        new SuccessResponse({
            message: `Get reader with id ${req.params.id} successfully`,
            metadata: await ReaderService.getReaderById(req.params.id)
        }).send(res);
    };

    createReader = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create new reader successfully',
            metadata: await ReaderService.createReader(req.body)
        }).send(res);
    };

    updateReader = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update reader successfully',
            metadata: await ReaderService.updateReader(req.params.id, req.body)
        }).send(res);
    };

    deleteReader = async (req, res, next) => {
        new SuccessResponse({
            message: 'Delete reader successfully',
            metadata: await ReaderService.deleteReader(req.params.id)
        }).send(res);
    };
}

module.exports = new ReaderController();

'use strict';

const { SuccessResponse } = require('../cores/success.response');
const ReaderCardService = require('../services/readerCard.service');

class ReaderCardController {
    getAllReaderCards = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all reader cards successfully',
            metadata: await ReaderCardService.getAllReaderCards()
        }).send(res);
    };

    getReaderCardById = async (req, res, next) => {
        new SuccessResponse({
            message: `Get reader card with id ${req.params.id} successfully`,
            metadata: await ReaderCardService.getReaderCardById(req.params.id)
        }).send(res);
    };

    createReaderCard = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create new reader card successfully',
            metadata: await ReaderCardService.createReaderCard(req.body)
        }).send(res);
    };

    updateReaderCard = async (req, res, next) => {
        new SuccessResponse({
            message: `Update reader card of id ${req.params.id} successfully`,
            metadata: await ReaderCardService.updateReaderCard(req.params.id, req.body)
        }).send(res);
    };

    deleteReaderCard = async (req, res, next) => {
        new SuccessResponse({
            message: `Delete reader card with id ${req.params.id} successfully`,
            metadata: await ReaderCardService.deleteReaderCard(req.params.id)
        }).send(res);
    };
}

module.exports = new ReaderCardController();

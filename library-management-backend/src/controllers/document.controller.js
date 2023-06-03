'use strict';

const { SuccessResponse } = require('../cores/success.response');
const DocumentService = require('../services/document.service');

class DocumentController {
    getAllDocuments = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all documents successfully',
            metadata: await DocumentService.getAllDocuments()
        }).send(res);
    };

    getDocumentById = async (req, res, next) => {
        new SuccessResponse({
            message: `Get document with id ${req.params.id} successfully`,
            metadata: await DocumentService.getDocumentById(req.params.id)
        }).send(res);
    };

    createDocument = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create new document successfully',
            metadata: await DocumentService.createDocument(req.body)
        }).send(res);
    };

    updateDocument = async (req, res, next) => {
        new SuccessResponse({
            message: 'Update document successfully',
            metadata: await DocumentService.updateDocument(req.params.id, req.body)
        }).send(res);
    };

    deleteDocument = async (req, res, next) => {
        new SuccessResponse({
            message: 'Delete document successfully',
            metadata: await DocumentService.deleteDocument(req.params.id)
        }).send(res);
    }
}

module.exports = new DocumentController();

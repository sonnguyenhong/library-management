'use strict';

const { SuccessResponse } = require('../cores/success.response');
const DocumentService = require('../services/document.service');

class DocumentController {
    createDocument = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create new document successfully',
            metadata: await DocumentService.createDocument(req.body)
        }).send(res);
    };
}

module.exports = new DocumentController();

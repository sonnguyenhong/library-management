'use strict';

const { SuccessResponse } = require('../cores/success.response');
const DocumentDetailService = require('../services/documentDetail.service');

class DocumentDetailController {
    createDocumentDetail = async (req, res, next) => {
        new SuccessResponse({
            message: 'Create document detail successfully',
            metadata: await DocumentDetailService.createDocumentDetail(req.body)
        }).send(res);
    };
}

module.exports = new DocumentDetailController();

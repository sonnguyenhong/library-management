const DocumentDetailModel = require('../models/documentDetail.model');

class DocumentDetailService {
    static async createDocumentDetail(payload) {
        return new DocumentDetail(payload).createDocumentDetail();
    }
}

class DocumentDetail {
    constructor({
        document, barcode, barcodeImage, status, isProcessed, updatedBy
    }) {
        this.document = document;
        this.barcode = barcode;
        this.barcodeImage = barcodeImage;
        this.status = status;
        this.isProcessed = isProcessed;
        this.updatedBy = updatedBy;
    }

    async createDocumentDetail() {
        return await DocumentDetailModel.create(this);
    }
}

module.exports = DocumentDetailService;
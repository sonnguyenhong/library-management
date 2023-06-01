const { model, Schema, Types } = require('mongoose');
const { DOCUMENT_DETAIL_COLLECTION_NAME, DOCUMENT_DETAIL_DOCUMENT_NAME, DOCUMENT_DOCUMENT_NAME, USER_DOCUMENT_NAME } = require('../constants/schema.constants');

const documentDetailSchema = new Schema(
    {
        barcode: {
            type: String,
        },
        document: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: DOCUMENT_DOCUMENT_NAME,
        },
        barcodeImage: {
            type: String,
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: USER_DOCUMENT_NAME,
        },
        status: {
            type: String,
        },
        isProcessed: {
            type: Boolean,
            default: false
        }
    }, 
    {
        timestamps: true,
        collection: DOCUMENT_DETAIL_COLLECTION_NAME,
    }
);

module.exports = model(DOCUMENT_DETAIL_DOCUMENT_NAME, documentDetailSchema);
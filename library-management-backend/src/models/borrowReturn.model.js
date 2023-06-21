const { model, Schema, Types } = require('mongoose');
const { BORROW_RETURN_DOCUMENT_NAME, BORROW_RETURN_COLLECTION_NAME, READER_CARD_DOCUMENT_NAME, DOCUMENT_DETAIL_DOCUMENT_NAME, USER_DOCUMENT_NAME, BORROW_TYPE, RETURN_TYPE } = require('../constants/schema.constants');

const borrowReturnSchema = new Schema(
    {
        cardNumber: {
            type: Schema.Types.ObjectId,
            ref: READER_CARD_DOCUMENT_NAME,
            required: true,
        },
        documentDetail: {
            type: Schema.Types.ObjectId,
            ref: DOCUMENT_DETAIL_DOCUMENT_NAME,
            required: true,
        },
        borrowType: {
            type: String,
        },
        borrowDate: {
            type: Date, 
            required: true,
        },
        provider: {
            type: Schema.Types.ObjectId,
            ref: USER_DOCUMENT_NAME,
        },
        expiredDate: {
            type: Date,
            required: true,
        },
        type: {
            type: String,
            required: true,
            enum: [BORROW_TYPE, RETURN_TYPE],
        },
        returnDate: {
            type: Date,
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: USER_DOCUMENT_NAME
        }
    }, 
    {
        timestamps: true,
        collection: BORROW_RETURN_COLLECTION_NAME,
    }
);

module.exports = model(BORROW_RETURN_DOCUMENT_NAME, borrowReturnSchema);
const { model, Schema, Types } = require('mongoose');
const { READER_CARD_ACTIVE_STATUS, READER_CARD_LOCKED_STATUS, USER_DOCUMENT_NAME, READER_CARD_COLLECTION_NAME, READER_CARD_DOCUMENT_NAME, READER_DOCUMENT_NAME, ONLINE_REGISTRATION_METHOD, OFFLINE_REGISTRATION_METHOD, CREATE_NEW_REGISTRATION_TYPE, RE_REGISTRATION_TYPE } = require('../constants/schema.constants');

const readerCardSchema = new Schema(
    {
        reader: {
            type: Schema.Types.ObjectId,
            ref: READER_DOCUMENT_NAME
        },
        cardNumber: {
            type: String,
            required: true,
        },
        registrationCode: {
            type: String,
            required: true,
        },
        cardBarcodeImage: {
            type: String,
            required: true,
        },
        issuedDate: {
            type: Date,
            required: true,
        },
        expiredDate: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: [READER_CARD_ACTIVE_STATUS, READER_CARD_LOCKED_STATUS],
        },
        registrationMethod: {
            type: String,
            required: true,
            enum: [ONLINE_REGISTRATION_METHOD, OFFLINE_REGISTRATION_METHOD],
        },
        registrationType: {
            type: String,
            required: true,
            enum: [RE_REGISTRATION_TYPE, CREATE_NEW_REGISTRATION_TYPE],
        },
        registrationDate: {
            type: Date,
            required: true,
        },
        isPay: {
            type: Boolean,
            required: true,
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: USER_DOCUMENT_NAME,
        },
    }, 
    {
        timestamps: true,
        collection: READER_CARD_COLLECTION_NAME,
    }
);

module.exports = model(READER_CARD_DOCUMENT_NAME, readerCardSchema);
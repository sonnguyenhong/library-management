const { model, Schema, Types } = require('mongoose');
const { READER_COLLECTION_NAME, READER_DOCUMENT_NAME, USER_DOCUMENT_NAME, USER_MALE_GENDER, USER_FEMALE_GENDER, USER_OTHER_GENDER, LECTURER, STUDENT, ONLINE_REGISTRATION_METHOD, OFFLINE_REGISTRATION_METHOD, RE_REGISTRATION_TYPE, CREATE_NEW_REGISTRATION_TYPE } = require('../constants/schema.constants');

const readerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        birthYear: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            enum: [USER_MALE_GENDER, USER_FEMALE_GENDER, USER_OTHER_GENDER],
        },
        readerType: {
            type: String,
            required: true,
            enum: [LECTURER, STUDENT],
        },
        department: {
            type: String,
            required: true,
        },
        _class: {
            type: String,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        cardImage: {
            type: String,
            required: true,
        },
        isProcess: {
            type: Boolean,
            required: true,
        }
    }, 
    {
        timestamps: true,
        collection: READER_COLLECTION_NAME,
    }
);

module.exports = model(READER_DOCUMENT_NAME, readerSchema);
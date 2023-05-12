'use strict';

const { Schema, model } = require('mongoose'); 
const { KEYTOKEN_COLLECTION_NAME, KEYTOKEN_DOCUMENT_NAME, USER_DOCUMENT_NAME } = require('../constants/schema.constants');

// Declare the Schema of the Mongo model
var keyTokenSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: USER_DOCUMENT_NAME,
        },
        refreshTokenSecret: {
            type: String,
            required: true,
        },
        accessTokenSecret: {
            type: String,
            required: true,
        },
        refreshTokensUsed: {
            type: Array,
            default: [],
        },
        refreshToken: {
            type: String,
            required: true,
        },
    },
    {
        collection: KEYTOKEN_COLLECTION_NAME,
        timestamps: true,
    },
);

//Export the model
module.exports = model(KEYTOKEN_DOCUMENT_NAME, keyTokenSchema);

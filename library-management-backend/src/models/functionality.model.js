const { model, Schema, Types } = require('mongoose');
const { FUNCTIONALITY_COLLECTION_NAME, FUNCTIONALITY_DOCUMENT_NAME } = require('../constants/schema.constants');

const functionalitySchema = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }, 
    {
        timestamps: true,
        collection: FUNCTIONALITY_COLLECTION_NAME,
    }
);

module.exports = model(FUNCTIONALITY_DOCUMENT_NAME, functionalitySchema);
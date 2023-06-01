const { model, Schema, Types } = require('mongoose');
const { DOCUMENT_COLLECTION_NAME, DOCUMENT_DOCUMENT_NAME, CATEGORY_DOCUMENT_NAME, AUTHOR_DOCUMENT_NAME, PUBLISHER_DOCUMENT_NAME, LANGUAGE_DOCUMENT_NAME, DOCUMENT_POSITION_DOCUMENT_NAME, DEPARTMENT_DOCUMENT_NAME } = require('../constants/schema.constants');

const documentSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        author: {
            type: [String],
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },
        publishedYear: {
            type: Number,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        summaryContent: {
            type: String,
        },
        numberOfPages: {
            type: Number,
            required: true,
        },
        paperSize: {
            type: String,
            required: true,
        },
        republishedTime: {
            type: Number,
        },
        coverPrice: {
            type: Number,
            required: true,
        },
        issueNumber: {
            type: Number,
            required: true,
        },
        issueDate: {
            type: Date,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        position: {
            type: String,
            required: true,
        }
    }, 
    {
        timestamps: true,
        collection: DOCUMENT_COLLECTION_NAME,
    }
);

module.exports = model(DOCUMENT_DOCUMENT_NAME, documentSchema);
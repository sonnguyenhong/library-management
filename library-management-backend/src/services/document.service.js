const DocumentModel = require('../models/document.model');
const dbConnection = require('mongoose').connection;
const documentDetailModel = require('../models/documentDetail.model');

class DocumentService {
    static async getAllDocuments() {
        return await DocumentModel.find();
    }

    static async getDocumentById(id) {
        return await DocumentModel.findById(id)
    }

    static async createDocument(payload) {
        return await new Document(payload).createDocument();
    }

    static async updateDocument(id, payload) {
        return await new Document(payload).updateDocument(id);
    }

    static async deleteDocument(id) {
        const session = await dbConnection.startSession();
        await session.withTransaction(async () => {
            const deletedDoc = await DocumentModel.findByIdAndDelete(id).session(session);
            await documentDetailModel.deleteMany({
                document: id
            }).session(session);
            return deletedDoc;
        })

        session.endSession();
        console.log('Success');
    }
}

class Document {
    constructor({
        code, name, category, department, author, publisher, publishedYear, language, summaryContent,
        numberOfPages, paperSize, republishedTime, coverPrice, issueNumber, issueDate, quantity, position
    }) {
        this.code = code;
        this.name = name;
        this.category = category;
        this.department = department;
        this.author = author;
        this.publisher = publisher;
        this.publishedYear = publishedYear;
        this.language = language;
        this.summaryContent = summaryContent;
        this.numberOfPages = numberOfPages;
        this.paperSize = paperSize;
        this.republishedTime = republishedTime;
        this.coverPrice = coverPrice;
        this.issueNumber = issueNumber;
        this.issueDate = issueDate;
        this.quantity = quantity;
        this.position = position;
    }

    async createDocument() {
        return await DocumentModel.create(this);
    }

    async updateDocument(id) {
        return await DocumentModel.findByIdAndUpdate(id, this);
    }
}

module.exports = DocumentService;
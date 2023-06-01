const DocumentModel = require('../models/document.model');
const DocumentDetailModel = require('../models/documentDetail.model');

class DocumentService {
    static async createDocument(payload) {
        return await new Document(payload).createDocument();
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
}

module.exports = DocumentService;
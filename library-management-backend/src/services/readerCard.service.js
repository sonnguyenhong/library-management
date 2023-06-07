const ReaderModel = require("../models/reader.model");
const ReaderCardModel = require("../models/readerCard.model");
const dbConnection = require('mongoose').connection;

class ReaderCardService {
    static async getAllReaderCards() {
        return await ReaderCardModel.find();
    }

    static async getReaderCardById(id) {
        return await ReaderCardModel.findById(id);
    }

    static async createReaderCard(payload) {
        return await new ReaderCard(payload).createReaderCard();
    }

    static async updateReaderCard(id, payload) {
        return await new ReaderCard(payload).updateReaderCard(id);
    }

    static async deleteReaderCard(id) {
        return await ReaderCardModel.findByIdAndDelete(id);
    }
}

class ReaderCard {
    constructor({
        reader, cardNumber, registrationCode, cardBarcodeImage, issuedDate, expiredDate, status,
        registrationMethod, registrationType, registrationDate, isPay, updatedBy
    }) {
        this.reader = reader;
        this.cardNumber = cardNumber;
        this.registrationCode = registrationCode;
        this.cardBarcodeImage = cardBarcodeImage;
        this.issuedDate = issuedDate;
        this.expiredDate = expiredDate;
        this.status = status;
        this.registrationMethod = registrationMethod;
        this.registrationType = registrationType;
        this.registrationDate = registrationDate;
        this.isPay = isPay;
        this.updatedBy = updatedBy;
    }

    async createReaderCard() {
        return await ReaderCardModel.create(this);
    }

    async updateReaderCard(id) {
        return await ReaderCardModel.findByIdAndUpdate(id, this);
    }
}

module.exports = ReaderCardService;
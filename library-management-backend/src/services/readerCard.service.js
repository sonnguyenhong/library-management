const { READER_CARD_ACTIVE_STATUS } = require("../constants/schema.constants");
const { BadRequestError } = require("../cores/error.response");
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
        // Find the reader
        const reader = await ReaderModel.findById(payload.reader).populate('readerCards');
        // If the reader already have an active card => Not allow to create new
        for(let readerCard of reader.readerCards) {
            if(readerCard.status === READER_CARD_ACTIVE_STATUS) {
                throw new BadRequestError('Reader already have an active card');
            }
        }

        const newReaderCard = await new ReaderCard(payload).createReaderCard();
        reader.readerCards.push(newReaderCard._id);
        await reader.save();
        return newReaderCard;
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
const { BadRequestError } = require('../cores/error.response');
const BorrowReturnModel = require('../models/borrowReturn.model');
const readerCardModel = require('../models/readerCard.model');
const DocumentService = require('./document.service');
const ReaderCardService = require('./readerCard.service');
const mongoose = require('mongoose');

class BorrowReturnService {
    static async getAllBorrowReturns() {
        return await BorrowReturnModel.find().populate('document', 'name').populate('cardNumber', 'cardNumber');
    }

    static async getBorrowReturnById(id) {
        return await BorrowReturnModel.findById(id).populate('document', 'name').populate('cardNumber', 'cardNumber');
    }

    static async createBorrowReturn(payload) {
        console.log(123);
        const cardNumber = await ReaderCardService.getByCardNumber(payload.cardNumber);
        if(!cardNumber) {
            throw new BadRequestError('Invalid Card number');
        }
        payload.cardNumber = new mongoose.Types.ObjectId(cardNumber._id);
        const document = await DocumentService.getByCode(payload.document);
        if(!document) {
            throw new BadRequestError('Invalid document code');
        }
        payload.document = new mongoose.Types.ObjectId(document._id);
        return new BorrowReturn(payload).createBorrowReturn();
    }

    static async updateBorrowReturn(id, payload) {
        return new BorrowReturn(payload).updateBorrowReturn(id);
    }
}

class BorrowReturn {
    constructor({
        cardNumber, document, borrowType, borrowDate, 
        provider, expiredDate, type, returnDate, receiver
    }) {
        this.cardNumber = cardNumber;
        this.document = document;
        this.borrowType = borrowType;
        this.borrowDate = borrowDate;
        this.provider = provider;
        this.expiredDate = expiredDate;
        this.type = type;
        this.returnDate = returnDate;
        this.receiver = receiver;
    }

    async createBorrowReturn() {
        return await BorrowReturnModel.create(this);
    }

    async updateBorrowReturn(id) {
        return await BorrowReturnModel.findByIdAndUpdate(id, this);
    }
}

module.exports = BorrowReturnService;
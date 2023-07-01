const BorrowReturnModel = require('../models/borrowReturn.model');

class BorrowReturnService {
    static async getAllBorrowReturns() {
        return await BorrowReturnModel.find().populate('document', 'name');
    }

    static async getBorrowReturnById(id) {
        return await BorrowReturnModel.findById(id).populate('document', 'name');
    }

    static async createBorrowReturn(payload) {
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
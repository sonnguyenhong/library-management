const ReaderModel = require("../models/reader.model");
const ReaderCardModel = require("../models/readerCard.model");
const dbConnection = require('mongoose').connection;

class ReaderService {
    static async getAllReaders() {
        return await ReaderModel.find();
    }

    static async getReaderById(id) {
        return await ReaderModel.findById(id).populate('readerCards');
    }

    static async createReader(payload) {
        return await new Reader(payload).createReader();
    }

    static async updateReader(id, payload) {
        return await new Reader(payload).updateReader(id);
    }

    static async deleteReader(id) {
        const session = await dbConnection.startSession();
        await session.withTransaction(async () => {
            const deletedReader = await ReaderModel.findByIdAndDelete(id).session(session);
            await ReaderCardModel.deleteMany({
                reader: id
            }).session(session);
            return deletedReader;
        })

        session.endSession();
        console.log('Success');
    }
}

class Reader {
    constructor({
        name, birthYear, gender, readerType, department, _class, phoneNumber, email, cardImage, isProcess
    }) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
        this.readerType = readerType;
        this.department = department;
        this._class = _class;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.cardImage = cardImage;
        this.isProcess = isProcess;
    }

    async createReader() {
        return await ReaderModel.create(this);
    } 

    async updateReader(id) {
        return await ReaderModel.findByIdAndUpdate(id, this);
    }
}

module.exports = ReaderService;
'use strict';

const KeyToken = require('../models/keytoken.model');
const { Types } = require('mongoose');
class KeyTokenService {
    static createKeyToken = async ({ userId, accessTokenSecret, refreshTokenSecret, refreshToken }) => {
        try {
            const filter = { user: userId };
            const update = {
                accessTokenSecret,
                refreshTokenSecret,
                refreshTokensUsed: [],
                refreshToken,
            };
            const options = {
                upsert: true,
                new: true,
            };
            const tokens = await KeyToken.findOneAndUpdate(filter, update, options);
            return tokens ? tokens.accessTokenSecret : null;
        } catch (error) {
            return error;
        }
    };

    static findByUserId = async (userId) => {
        console.log(123);
        return await KeyToken.findOne({ user: new Types.ObjectId(userId) }).lean();
    };

    static removeKeyById = async (id) => {
        return await KeyToken.findOneAndRemove({ _id: id });
    };
}

module.exports = KeyTokenService;

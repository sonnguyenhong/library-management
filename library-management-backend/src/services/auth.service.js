const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { BadRequestError, AuthFailureError } = require("../cores/error.response");
const KeyTokenService = require("./keyToken.service");
const UserService = require("./user.service");
const { createTokenPair } = require('../auth/authUtils');
const { getInfoData } = require('../utils');

class AuthService {
    static logout = async (keyStore) => {
        const delKey = await KeyTokenService.removeKeyById(keyStore._id);
        return delKey;
    }

    static login = async ({ username, password }) => {
        const existedUser = await UserService.findByUsername({ username });
        if(!existedUser) {
            throw new BadRequestError('User has not been registed');
        }

        const isMatchedPassword = await bcrypt.compare(password, existedUser.password);
        if(!isMatchedPassword) {
            throw new AuthFailureError('Authentication Error: Wrong password');
        }

        const accessTokenSecret = crypto.randomBytes(64).toString('hex');
        const refreshTokenSecret = crypto.randomBytes(64).toString('hex');
        const tokens = await createTokenPair({ userId: existedUser._id, username }, accessTokenSecret, refreshTokenSecret);

        await KeyTokenService.createKeyToken({
            userId: existedUser._id,
            accessTokenSecret,
            refreshTokenSecret,
            refreshToken: tokens.refreshToken,
        });

        return {
            user: getInfoData({ fields: ['_id', 'username', 'fullname', 'functionalities'], object: existedUser }),
            tokens,
        }
    }
}

module.exports = AuthService;
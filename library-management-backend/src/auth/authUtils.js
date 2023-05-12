'use strict';
const JWT = require('jsonwebtoken');
const { asyncHandler } = require('./checkAuth.js');
const { HEADER } = require('../constants/header.constants.js');
const { AuthFailureError, NotFoundError } = require('../cores/error.response');
const KeyTokenService = require('../services/keyToken.service');

const createTokenPair = async (payload, accessTokenSecret, refreshTokenSecret) => {
    try {
        // accesstoken
        const accessToken = await JWT.sign(payload, accessTokenSecret, {
            expiresIn: '1d',
        });

        // refresh token
        const refreshToken = await JWT.sign(payload, refreshTokenSecret, {
            expiresIn: '7d',
        });

        // verify
        JWT.verify(accessToken, accessTokenSecret, (err, decoded) => {
            if (err) {
                console.error(`Error verify::`, err);
            } else {
                console.log(`Decoded verify::`, decoded);
            }
        });

        return { accessToken, refreshToken };
    } catch (error) {}
};

const authentication = asyncHandler(async (req, res, next) => {
    /*
        1 - check userId missing?
        2 - get accessToken
        3 - verifyToken
        4 - check user in db
        5 - check keyStore with userId
        6 - OK all? => return next()
    */
    const userId = req.headers[HEADER.CLIENT_ID];
    if (!userId) {
        throw new AuthFailureError('Invalid request');
    }

    const keyStore = await KeyTokenService.findByUserId(userId);
    if (!keyStore) {
        throw new NotFoundError('Not found key store');
    }

    const accessToken = req.headers[HEADER.AUTHORIZATION];
    if (!accessToken) {
        throw new AuthFailureError('Invalid request');
    }

    try {
        const decodeUser = JWT.verify(accessToken, keyStore.publicKey);
        if (userId !== decodeUser.userId) {
            throw new AuthFailureError('Invalid user');
        }
        req.keyStore = keyStore;
        return next();
    } catch (error) {
        throw error;
    }
});

module.exports = { createTokenPair, authentication };

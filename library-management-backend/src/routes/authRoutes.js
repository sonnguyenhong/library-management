'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const authController = require('../controllers/auth.controller');
const { authentication } = require('../auth/authUtils');
const router = express.Router();

/**
 * @swagger
 *  components:
 *      securitySchemes:
 *          BearerAuth:
 *              type: http
 *              scheme: bearer
 *      schemas:
 *          Authentication: 
 *              type: object
 *              properties:
 *                  username: 
 *                      type: string
 *                  password:
 *                      type: string
 *          User:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                  fullname: 
 *                      type: string
 *                  birthYear: 
 *                      type: string
 *                  gender:
 *                      type: string
 *                  jobTitle: 
 *                      type: string
 *                  phoneNumber:
 *                      type: string
 *                  email:
 *                      type: string
 *                  functionalities: 
 *                      type: array
 *                      items:
 *                          type: string
 *          KeyToken: 
 *              type: object
 *              properties: 
 *                  user: 
 *                      type: string
 *                  refreshTokenSecret:
 *                      type: string
 *                  accessTokenSecret: 
 *                      type: string
 *                  refreshTokensUsed: 
 *                      type: array
 *                      items: 
 *                          type: string
 *                  refreshToken:
 *                      type: string
 */


/**
 * @swagger
 * /:
 *  get:
 *      summary: This is test api summary
 *      description: This is test api description
 *      responses:
 *          200: 
 *              description: Test Get method
 */
router.get('/', (req, res) => {
    res.send('Welcome to ...');
})

/**
 * @swagger
 * /login:
 *  post:
 *      summary: Used to log user in
 *      description: Get username and password to log user in the system
 *      requestBody:
 *          description: Username and password are required
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Authentication'
 *      responses:
 *          200: 
 *              description: Logged In Successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/User'
 */
router.post('/login', asyncHandler(authController.login));

// authentication
router.use(authentication);
// auth routes
/**
 * @swagger
 * /logout:
 *  post:
 *      summary: Used to log user out
 *      description: Log user out of the system
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - in: header
 *            name: x-client-id
 *            schema: 
 *              type: string
 *            required: true
 *      responses:
 *          200: 
 *              description: Logged Out Successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/KeyToken'
 */
router.post('/logout', asyncHandler(authController.logout));

module.exports = router;

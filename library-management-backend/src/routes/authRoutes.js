'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const authController = require('../controllers/auth.controller');
const { authentication } = require('../auth/authUtils');
const router = express.Router();

/**
 * @swagger
 *  components:
 *      parameters: 
 *          userIdParam: 
 *              in: header
 *              name: x-client-id
 *              required: true
 *              schema:
 *                  type: string
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
 *                  password:
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
 * 
 *          Document:
 *              type: object
 *              properties: 
 *                  code:
 *                      type: string
 *                  name:
 *                      type: string
 *                  category:
 *                      type: string
 *                  department:
 *                      type: string
 *                  author:
 *                      type: array
 *                      items:
 *                          type: string
 *                  publisher:
 *                      type: string
 *                  publishedYear:
 *                      type: number
 *                  language:
 *                      type: string
 *                  summaryContent:
 *                      type: string
 *                  numberOfPages:
 *                      type: number
 *                  paperSize:
 *                      type: string
 *                  republishedTime:
 *                      type: number
 *                  coverPrice:
 *                      type: number
 *                  issueNumber:
 *                      type: number
 *                  issueDate:
 *                      type: string
 *                      format: date
 *                  quantity:
 *                      type: number
 *                  position:
 *                      type: string
 * 
 *          DocumentDetail:
 *              type: object
 *              properties:
 *                  barcode:
 *                      type: string
 *                  document:
 *                      type: string
 *                  barcodeImage:
 *                      type: string
 *                  updatedBy: 
 *                      type: string
 *                  status: 
 *                      type: string
 *                  isProcessed:
 *                      type: boolean    
 *          
 *          Reader: 
 *              type: object
 *              properties: 
 *                  name:
 *                      type: string
 *                  birthYear:
 *                      type: number
 *                  gender: 
 *                      type: string
 *                  readerType: 
 *                      type: string
 *                  department:
 *                      type: string
 *                  _class: 
 *                      type: string
 *                  phoneNumber:
 *                      type: string
 *                  email:
 *                      type: string
 *                  cardImage: 
 *                      type: string
 *                  isProcess:
 *                      type: boolean
 *          ReaderCard:
 *              type: object
 *              properties:
 *                  reader:
 *                      type: string
 *                  cardNumber:
 *                      type: string
 *                  registrationCode:
 *                      type: string
 *                  cardBarcodeImage:
 *                      type: string
 *                  issuedDate:
 *                      type: string
 *                      format: date
 *                  expiredDate:
 *                      type: string
 *                      format: date
 *                  status:
 *                      type: string
 *                  registrationMethod:
 *                      type: string
 *                  registrationType:
 *                      type: string
 *                  registrationDate:
 *                      type: string
 *                      format: date
 *                  isPay:
 *                      type: boolean
 *                  updatedBy:
 *                      type: string
 */


/**
 * @swagger
 * /:
 *  get:
 *      summary: This is test api summary
 *      description: This is test api description
 *      tags:
 *          - Test API
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
 *      tags:
 *          - Auth
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
 *      tags:
 *          - Auth
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
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

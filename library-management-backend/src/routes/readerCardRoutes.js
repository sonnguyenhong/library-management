'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const readerCardController = require('../controllers/readerCard.controller');
const { authentication } = require('../auth/authUtils');
const { isAdmin } = require('../middlewares/access.middleware');
const router = express.Router();

// authentication
router.use(authentication);

/**
 * @swagger
 * /reader-cards:
 *  get:
 *      summary: This is api to get all reader cards
 *      description: This is api to get all reader cards
 *      tags:
 *          - ReaderCard
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      responses:
 *          200: 
 *              description: Get all reader cards successfully
 */
router.get('/', asyncHandler(readerCardController.getAllReaderCards));

/**
 * @swagger
 * /reader-cards/{id}:
 *  get:
 *      summary: This is api to get reader card by id
 *      description: This is api to get reader card by id
 *      tags:
 *          - ReaderCard
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of reader card you want to find
 *      responses:
 *          200: 
 *              description: Get all reader card successfully
 */
router.get('/:id', asyncHandler(readerCardController.getReaderCardById));

/**
 * @swagger
 * /reader-cards:
 *  post:
 *      summary: This is api to create new reader card
 *      description: This is api to create new reader card
 *      tags:
 *          - ReaderCard
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      requestBody:
 *          description: All fields for reader
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/ReaderCard'
 *      responses:
 *          200: 
 *              description: Create new reader successfully
 */
router.post('/', asyncHandler(readerCardController.createReaderCard));

/**
 * @swagger
 * /reader-cards/{id}:
 *  put:
 *      summary: This is api to update reader card
 *      description: This is api to update reader card
 *      tags:
 *          - ReaderCard
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of user you want to delete
 *      requestBody:
 *          description: All fields for reader card
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/ReaderCard'
 *      responses:
 *          200: 
 *              description: Update reader card successfully
 */
router.put('/:id', asyncHandler(readerCardController.updateReaderCard));

/**
 * @swagger
 * /reader-cards/{id}:
 *  delete:
 *      summary: This is api to delete reader card
 *      description: This is api to delete reader card
 *      tags:
 *          - ReaderCard
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of reader card you want to delete
 *      responses:
 *          200: 
 *              description: Delete reader card successfully
 */
router.delete('/:id', asyncHandler(readerCardController.deleteReaderCard));

module.exports = router;

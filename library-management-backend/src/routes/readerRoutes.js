'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const readerController = require('../controllers/reader.controller');
const { authentication } = require('../auth/authUtils');
const { isAdmin } = require('../middlewares/access.middleware');
const router = express.Router();


router.get('/', asyncHandler(readerController.getAllReaders));
// authentication
router.use(authentication);

/**
 * @swagger
 * /readers:
 *  get:
 *      summary: This is api to get all readers
 *      description: This is api to get all readers
 *      tags:
 *          - Reader
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      responses:
 *          200: 
 *              description: Get all readers successfully
 */


/**
 * @swagger
 * /readers/{id}:
 *  get:
 *      summary: This is api to get all readers
 *      description: This is api to get all readers
 *      tags:
 *          - Reader
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of reader you want to find
 *      responses:
 *          200: 
 *              description: Get all readers successfully
 */
router.get('/:id', asyncHandler(readerController.getReaderById));

/**
 * @swagger
 * /readers:
 *  post:
 *      summary: This is api to create new reader
 *      description: This is api to create new reader
 *      tags:
 *          - Reader
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
 *                      $ref: '#components/schemas/Reader'
 *      responses:
 *          200: 
 *              description: Create new reader successfully
 */
router.post('/', isAdmin, asyncHandler(readerController.createReader));

router.put('/:id', isAdmin, asyncHandler(readerController))

module.exports = router;

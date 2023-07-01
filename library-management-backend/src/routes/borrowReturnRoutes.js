'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const borrowReturnController = require('../controllers/borrowReturn.controller');
const { authentication } = require('../auth/authUtils');
const { isAdmin } = require('../middlewares/access.middleware');
const router = express.Router();

// authentication
router.use(authentication);

/**
 * @swagger
 * /borrow-returns:
 *  get:
 *      summary: This is api to get all borrow returns
 *      description: This is api to get all borrow returns
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      tags:
 *          - BorrowReturn
 *      responses:
 *          200: 
 *              description: Get all borrow returns successfully
 */
router.get('/', asyncHandler(borrowReturnController.getAllBorrowReturns));

/**
 * @swagger
 * /borrow-returns/{id}:
 *  get:
 *      summary: This is api to get borrow return by id
 *      description: This is api to get borrow return by id
 *      security: 
 *          - BearerAuth: []
 *      tags:
 *          - BorrowReturn
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of borrow return you want to get
 *      responses:
 *          200: 
 *              description: Get borrow return by id successfully
 */
router.get('/:id', asyncHandler(borrowReturnController.getBorrowReturnById));

/**
 * @swagger
 * /borrow-returns:
 *  post:
 *      summary: This is api to create new borrow return
 *      description: This is api to create new borrow return
 *      tags:
 *          - BorrowReturn
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      requestBody:
 *          description: All fields for borrow return
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/BorrowReturn'
 *      responses:
 *          200: 
 *              description: Create new borrow return successfully
 */
router.post('/', asyncHandler(borrowReturnController.createBorrowReturn));

/**
 * @swagger
 * /borrow-returns/{id}:
 *  put:
 *      summary: This is api to update borrow return
 *      description: This is api to update borrow return 
 *      tags:
 *          - BorrowReturn
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of borrow return you want to update
 *      requestBody:
 *          description: All fields for borrow return 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/BorrowReturn'
 *      responses:
 *          200: 
 *              description: Update borrow return successfully
 */
router.put('/:id', asyncHandler(borrowReturnController.updateBorrowReturn));

module.exports = router;

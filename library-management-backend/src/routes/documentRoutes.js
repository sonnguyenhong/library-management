'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const documentController = require('../controllers/document.controller');
const { authentication } = require('../auth/authUtils');
const { isAdmin } = require('../middlewares/access.middleware');
const router = express.Router();

/**
 * @swagger
 * /documents:
 *  get:
 *      summary: This is api to get all documents
 *      description: This is api to get all documents
 *      tags:
 *          - Document
 *      responses:
 *          200: 
 *              description: Get all documents successfully
 */
router.get('/', asyncHandler(documentController.getAllDocuments));

/**
 * @swagger
 * /documents/{id}:
 *  get:
 *      summary: This is api to get document by id
 *      description: This is api to get document by id
 *      tags:
 *          - Document
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of user you want to find
 *      responses:
 *          200: 
 *              description: Get document by id successfully
 */
router.get('/:id', asyncHandler(documentController.getDocumentById));

// authentication
router.use(authentication);

/**
 * @swagger
 * /documents:
 *  post:
 *      summary: This is api to create new document
 *      description: This is api to create new document
 *      tags:
 *          - Document
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      requestBody:
 *          description: All fields for document
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Document'
 *      responses:
 *          200: 
 *              description: Create new user successfully
 */
router.post('/', isAdmin, asyncHandler(documentController.createDocument));

/**
 * @swagger
 * /documents/{id}:
 *  put:
 *      summary: This is api to update document
 *      description: This is api to update document
 *      tags:
 *          - Document
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
 *          description: All fields for document
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Document'
 *      responses:
 *          200: 
 *              description: Update document successfully
 */
router.put('/:id', isAdmin, asyncHandler(documentController.updateDocument));

/**
 * @swagger
 * /documents/{id}:
 *  delete:
 *      summary: This is api to delete document
 *      description: This is api to delete document
 *      tags:
 *          - Document
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
 *      responses:
 *          200: 
 *              description: Delete document successfully
 */
router.delete('/:id', isAdmin, asyncHandler(documentController.deleteDocument));

module.exports = router;

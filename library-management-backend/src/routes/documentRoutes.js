'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const documentController = require('../controllers/document.controller');
const { authentication } = require('../auth/authUtils');
const { isAdmin } = require('../middlewares/access.middleware');
const router = express.Router();

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

module.exports = router;

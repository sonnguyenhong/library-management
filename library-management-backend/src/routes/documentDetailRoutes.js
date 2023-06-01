'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const documentDetailController = require('../controllers/documentDetail.controller');
const { authentication } = require('../auth/authUtils');
const { isAdmin } = require('../middlewares/access.middleware');
const router = express.Router();

// authentication
router.use(authentication);

/**
 * @swagger
 * /documentDetails:
 *  post:
 *      summary: This is api to create new document detail
 *      description: This is api to create new document detail
 *      tags:
 *          - DocumentDetail
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      requestBody:
 *          description: All fields for document detail
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/DocumentDetail'
 *      responses:
 *          200: 
 *              description: Create new user successfully
 */
router.post('/', isAdmin, asyncHandler(documentDetailController.createDocumentDetail));

module.exports = router;

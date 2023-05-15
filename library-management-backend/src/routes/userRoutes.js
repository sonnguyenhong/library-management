'use strict';

const express = require('express');
const { asyncHandler } = require('../auth/checkAuth');
const userController = require('../controllers/user.controller');
const { authentication } = require('../auth/authUtils');
const { isAdmin } = require('../middlewares/access.middleware');
const router = express.Router();

// authentication
router.use(authentication);

/**
 * @swagger
 * /users:
 *  get:
 *      summary: This is api to get all users
 *      description: This is api to get all users
 *      tags:
 *          - User
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      responses:
 *          200: 
 *              description: Get all users successfully
 */
router.get('/', isAdmin, asyncHandler(userController.getAll));

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: This is api to get user by id
 *      description: This is api to get user by id
 *      tags:
 *          - User
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of user you want to get
 *      responses:
 *          200: 
 *              description: Get user successfully
 */
router.get('/:id', isAdmin, asyncHandler(userController.getById));

/**
 * @swagger
 * /users:
 *  post:
 *      summary: This is api to create new user
 *      description: This is api to create new user
 *      tags:
 *          - User
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *      requestBody:
 *          description: All fields for user
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          201: 
 *              description: Create new user successfully
 */
router.post('/', isAdmin, asyncHandler(userController.create));

/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: This is api to update new user
 *      description: This is api to update new user
 *      tags:
 *          - User
 *      security: 
 *          - BearerAuth: []
 *      parameters:
 *          - $ref: '#/components/parameters/userIdParam'
 *          - in: path
 *            name: id
 *            schema: 
 *              type: string
 *            required: true
 *            description: ID of user you want to update
 *      requestBody:
 *          description: All fields for user
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          200: 
 *              description: Update new user successfully
 */
router.put('/:id', isAdmin, asyncHandler(userController.update));

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: This is api to delete new user
 *      description: This is api to delete new user
 *      tags:
 *          - User
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
 *              description: Delete new user successfully
 */
router.delete('/:id', isAdmin, asyncHandler(userController.remove));

module.exports = router;

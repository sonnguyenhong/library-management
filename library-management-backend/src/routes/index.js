'use strict';

const express = require('express');
const router = express.Router();

const PREFIX = '/api/v1';

// check apiKey

// check permission

// routes
router.use(PREFIX, require('./authRoutes'));
router.use(`${PREFIX}/users`, require('./userRoutes'));

module.exports = router;
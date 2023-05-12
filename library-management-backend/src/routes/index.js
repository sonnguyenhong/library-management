'use strict';

const express = require('express');
const router = express.Router();

// check apiKey

// check permission

// routes
router.use('/api/v1', require('./authRoutes'));

module.exports = router;
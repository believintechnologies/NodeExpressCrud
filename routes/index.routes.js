const express = require('express');
const router = express.Router();
const registrationRoute = require('./registration.routes');

router.use('/registration', registrationRoute );

module.exports = router;
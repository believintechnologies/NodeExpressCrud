
const express = require('express');
const router = express.Router();
const loginController =  require('../controllers/login.controller');
const { formValidator , validator } = require('../middleware/log-auth');

router.post('/', formValidator(), validator, loginController.login  );


module.exports = router;
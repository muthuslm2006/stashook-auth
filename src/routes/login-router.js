const express = require('express');
const LoginController = require('../controller/login-controller');

const router = express.Router();

router.post('/login', LoginController.authenticate);

module.exports = router;
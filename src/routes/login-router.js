const express = require('express');
const LoginController = require('../controller/login-controller');

const router = express.Router();

router.get('/login', LoginController.authenticate);

module.exports = router;
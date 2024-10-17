var express = require('express');
var router = express.Router();
const UserController = require('../controller/user-controller');

router.post('/createUser', UserController.addUser);

router.post('/updateUser', UserController.updateUser);

router.post('/blockUser', UserController.blockUser);

router.post('/deleteUser', UserController.deleteUser);

router.post('/searchUser', UserController.searchUser);

module.exports = router;

var express = require('express');
var router = express.Router();
const UserController = require('../controller/user-controller')

router.get('/createUser', UserController.addUser);

router.get('/updateUser', UserController.updateUser);

router.get('/deleteUser', UserController.deleteUser);

router.get('/removeUser', UserController.permanentDeleteUser);

router.get('/searchUser', UserController.searchUser);

module.exports = router;

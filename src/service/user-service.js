const {Util, Connection, Helper, Model} = require('../../node_modules/stashook-utils');
const Queries = require('../util/queries');
const Message = require('../util/message');
const UsersModel = require('../model/users');

module.exports = {
    addUser: async (req, res, next) => {

        res.json("Add User");
    },
    updateUser: async (req, res, next) => {

        res.json("Update User");
    },
    blockUser: async (req, res, next) => { //softDelete

        res.json("Delete User");
    },
    permanentDeleteUser: async (req, res, next) => { //hardDelete

        res.json("Permanent Delete  User");
    },
    searchUser: async (req, res, next) => {

        res.json("Search User");  
    }

}
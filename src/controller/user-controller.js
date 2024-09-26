const {Util} = require('../../node_modules/stashook-utils');
const Message = require('../dao/message');
const userService = require('../service/user-service');

module.exports = {
    addUser: async (req, res, next) => {

        try {
            res.json("Add User");
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    updateUser: async (req, res, next) => {

        try {
            res.json("Update User");
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    deleteUser: async (req, res, next) => { //softDelete

        try {
            res.json("Soft Delete User");
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    permanentDeleteUser: async (req, res, next) => { //hardDelete

        try {
            res.json("Permanently Delete User");
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    searchUser: async (req, res, next) => {

        try {
            res.json("Search User");
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    }

}
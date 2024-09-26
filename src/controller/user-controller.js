const {Util} = require('../../node_modules/stashook-utils');
const Message = require('../util/message');
const userService = require('../service/user-service');

module.exports = {
    addUser: async (req, res, next) => {

        try {
            userService.addUser(req, res, next);
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    updateUser: async (req, res, next) => {

        try {
            userService.updateUser(req, res, next);
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    blockUser: async (req, res, next) => { //softDelete

        try {
            userService.blockUser(req, res, next);
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    deleteUser: async (req, res, next) => { //hardDelete

        try {
            userService.deleteUser(req, res, next);
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    },
    searchUser: async (req, res, next) => {

        try {
            userService.searchUser(req, res, next);
        }
        catch (excep) {
            Util.sendError500(req, res, excep);
        }
    }

}
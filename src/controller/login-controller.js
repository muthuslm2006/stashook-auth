const {Util} = require('../../node_modules/stashook-utils');
const Message = require('../dao/message');
const loginService = require('../service/login-service');

module.exports = {
    authenticate: async function (req, res, next) {
        try {

            if (req.body.username && req.body.password) {
                loginService.authenticate(req, res, next);
            }
            else {
                Util.sendError401(res, Message.USER_LOGGED_IN_FAILED);
            }
        }
        catch (excep) {
            console.log("Authenitcate excep ::: " + excep);
            Util.sendError500(req, res, excep);
        }
    }
}
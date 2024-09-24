const Util = require('../dao/util');
const Message = require('../dao/message');
const loginService = require('../service/login-service');

module.exports = {
    authenticate: async function (req, res, next) {
        try {

            const loginId = req.query.username || '10504';
            const password = req.query.username || 'Test@1234';

            if (loginId && password) {
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
const jsonWebToken = require('jsonwebtoken');
const connection = require('../config/db-connect');
const bcryptjs = require('bcryptjs');
const Queries = require('../dao/queries');
const Util = require('../dao/util');
const Message = require('../dao/message');
const UsersLogModel = require('../model/userslog');

module.exports = {
    authenticate: async function (req, res, next) {

        console.log("Authenitcate Query ::: " + Queries.LoginAuthenticate);

        const loginId = req.query.username || '10504';
        const password = req.query.password || 'Test@1234';

        connection.query(Queries.LoginAuthenticate, [loginId], function (err, results) {

            if (err === null && results[0] !== undefined) {
                bcryptjs.compare(password, results[0].userPwd).then(match => {

                    if (match) {

                        UsersLogModel.create('autoId', UsersLogModel.createData(results));

                        let accessToken = jsonWebToken.sign({ loginId: loginId, password }, process.env.ACCESS_TOKEN);

                        res.status(200).send({
                            accesstoken: accessToken,
                            employeeId: results[0].employeeId,
                            message: Message.USER_LOGGED_IN_SUCCESSFULLY
                        });
                        res.end();
                    } else {
                        Util.sendError401(res, Message.USER_LOGGED_IN_FAILED);
                    }
                });
            } else {
                Util.sendError401(res, Message.USER_NOT_FOUND);
            }
        });
    }
}

const jsonWebToken = require('jsonwebtoken');
const { Util, Connection } = require('stashook-utils');
const bcryptjs = require('bcryptjs');
const Queries = require('../util/queries');
const Message = require('../util/message');
const Logger = require('../util/logger');
const UsersLogModel = require('../model/userslog');

module.exports = {
    generateAccessToken: async function (req, res, next) {

        Logger.info("Authenitcate Query ::: " + Queries.LoginAuthenticate);

        const loginId = req.body.username;
        const password = req.body.password;

        Connection.query(Queries.LoginAuthenticate, [loginId, loginId, loginId], function (err, results) {

            if (err === null && results[0] !== undefined) {
                bcryptjs.compare(password, results[0].userPwd).then(match => {

                    if (match) {

                        Connection.query(Queries.UserRolesSelect, [results[0].employeeId], function (err, roleResults) {

                            UsersLogModel.create(UsersLogModel.createData(results));
                            let accessToken = jsonWebToken.sign(createTokenData(results[0], roleResults), process.env.ACCESS_TOKEN);

                            res.status(200).send({
                                accesstoken: accessToken,
                                message: Message.USER_LOGGED_IN_SUCCESSFULLY
                            });
                            res.end();
                        });
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

function createTokenData(user, roleResults) {

    let isAdmin = false;
    let roles = [] ;

    roleResults.forEach(element => {
        if(element.isAdmin && !isAdmin)
            isAdmin = true;
        roles.push(element.roleId)
    });
    
    return {
        employeeId: user.employeeId,
        userId: user.userId,
        userName: user.userName,
        producerId: user.producerId,
        userType: user.userType,
        roles: roles,
        isAdmin: isAdmin
    }
}



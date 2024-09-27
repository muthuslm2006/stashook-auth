const {Util, Connection, Helper, Model} = require('stashook-utils');

module.exports = new class UsersModel extends Model {

  constructor() {
    super('users'); // Table Name
  }

  createData(results) {
    return { 
      'employeeId': results[0].employeeId, 
      'createdDate': Util.getDate(), 
      'status': 1 
    }
  }

  updateByTimesheetId(result)
  {

    Connection.query(Queres.USERUpdaaxYX, [result.status, result.employeeId], function (err, results) {

      if (err === null && results[0] !== undefined) {
          return results;
      } else {
          Util.sendError401(res, Message.USER_NOT_FOUND);
      }
    });

  }
}
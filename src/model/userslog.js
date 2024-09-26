const {Util, Model} = require('../../node_modules/stashook-utils');

module.exports = new class UsersLogModel extends Model {

  constructor() {
    super('userslog');
  }

  createData(results) {
    return { 
      'employeeId': results[0].employeeId, 
      'userLoginTime': Util.getDate(), 
      'fetchBlock': 1 
    }
  }
}
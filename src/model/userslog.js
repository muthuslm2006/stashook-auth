const Model = require('../model/model')
const Util = require('../dao/util');

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
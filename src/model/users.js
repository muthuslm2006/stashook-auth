const Model = require('../model/model')
const Util = require('../dao/util');

module.exports = new class UsersModel extends Model {

  constructor() {
    super('users');
  }

}
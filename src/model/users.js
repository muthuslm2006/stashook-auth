const {Util, Connection, Helper, Model} = require('../../node_modules/stashook-utils');

module.exports = new class UsersModel extends Model {

  constructor() {
    super('users');
  }

}
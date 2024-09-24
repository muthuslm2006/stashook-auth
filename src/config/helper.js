const bcryptjs = require('bcryptjs');

async function verifyPassword(password, dbPassword) {

  const match = await bcryptjs.compare(password, dbPassword);
  return match;
}


function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }
  
  module.exports = {
    getOffset,
    emptyOrRows,
    verifyPassword
  }
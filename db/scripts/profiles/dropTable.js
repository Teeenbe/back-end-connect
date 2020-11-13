const { query } = require("../../index");

const sqlStatement = `
DROP TABLE profiles
;`;

async function dropTable() {
  await query(sqlStatement);
}

dropTable();

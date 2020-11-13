const { query } = require("../../index");

const sqlStatement = `
DROP TABLE comments
;`;

async function dropTable() {
  await query(sqlStatement);
}

dropTable();

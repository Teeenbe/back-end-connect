const { query } = require("../../index");

const sqlStatement = `
DROP TABLE questions
;`;

async function dropTable() {
  await query(sqlStatement);
}

dropTable();

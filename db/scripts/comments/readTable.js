const { query } = require("../../index");

const sqlStatement = `
SELECT *
FROM comments
;`;

async function readTable() {
  const res = await query(sqlStatement);
  console.log(res);
}

readTable();

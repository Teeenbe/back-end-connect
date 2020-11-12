const { query } = require("../../index");

const sqlStatement = `
SELECT *
FROM profiles
;`;

async function readTable() {
  const res = await query(sqlStatement);
  console.log(res);
}

readTable();

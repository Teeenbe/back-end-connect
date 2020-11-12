const { query } = require("../../index");

const sqlStatement = `
DELETE FROM comments
;`;

async function deleteRows() {
  const res = await query(sqlStatement);
  console.log(res);
}

deleteRows();

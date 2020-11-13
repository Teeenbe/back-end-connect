const { query } = require("../../index");

const sqlStatement = `
DELETE FROM questions
;`;

async function deleteRows() {
  const res = await query(sqlStatement);
  console.log(res);
}

deleteRows();

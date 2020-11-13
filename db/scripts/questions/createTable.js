const { query } = require("../../index");

const sqlStatement = `
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    name TEXT,
    topic TEXT,
    question TEXT
);`;

async function createTable() {
  const res = await query(sqlStatement);
  console.log(res);
}

createTable();

const { query } = require("../../index");

const sqlStatement = `
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    type TEXT,
    first_name TEXT,
    last_name TEXT,
    about_me TEXT,
    interests TEXT[],
    experience TEXT,
    email_address TEXT
);`;

async function createTable() {
  const res = await query(sqlStatement);
  console.log(res);
}

createTable();

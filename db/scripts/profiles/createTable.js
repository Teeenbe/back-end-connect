const { query } = require("../../index");

const sqlStatement = `
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    type TEXT,
    firstname TEXT,
    lastname TEXT,
    aboutme TEXT,
    interests TEXT[],
    experience TEXT,
    emailaddress TEXT
);`;

async function createTable() {
  const res = await query(sqlStatement);
  console.log(res);
}

createTable();

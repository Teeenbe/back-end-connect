const { query } = require("../../index");

const sqlStatement = `
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    text TEXT,
    questionid INT,
    CONSTRAINT fk_comments
        FOREIGN KEY (questionid)
            REFERENCES questions(id)
                ON DELETE SET NULL
);`;

async function createTable() {
  const res = await query(sqlStatement);
  console.log(res);
}

createTable();

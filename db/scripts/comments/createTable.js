const { query } = require("../../index");

const sqlStatement = `
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    text TEXT,
    question_id INT,
    CONSTRAINT fk_comments
        FOREIGN KEY (question_id)
            REFERENCES questions(id)
              ON DELETE NO ACTION
);`;

async function createTable() {
  const res = await query(sqlStatement);
  console.log(res);
}

createTable();

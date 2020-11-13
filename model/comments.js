const { query } = require("../db/index");

async function getComments(id) {
  const sqlStatement = `
    SELECT *
    FROM comments
    WHERE question_id = ($1)
    ;`;
  const res = await query(sqlStatement, [id]);
  console.log(res.rows);
  return res.rows;
}

async function addComment(data) {
  const sqlStatement = `
    INSERT INTO comments
        (text, question_id)
    VALUES
        ($1, $2)
    ;`;
  questionData = Object.values(data);
  console.log(questionData);
  await query(sqlStatement, questionData);
}

module.exports = {
  getComments,
  addComment,
};

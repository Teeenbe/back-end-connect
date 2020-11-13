const { query } = require("../db/index");

async function getComments(id) {
  const sqlStatement = `
    SELECT *
    FROM comments
    WHERE question_id = $1
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
  await query(sqlStatement, questionData);
}

async function deleteComment(id) {
  const sqlStatement = `
    DELETE FROM comments
    WHERE id = $1
    ;`;
  await query(sqlStatement, [id]);
}

module.exports = {
  getComments,
  addComment,
  deleteComment,
};

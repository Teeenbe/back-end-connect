const { query } = require("../db/index");

async function getQuestions() {
  const sqlStatement = `
    SELECT *
    FROM questions
    ;`;
  const res = await query(sqlStatement);
  return res.rows;
}

async function addQuestion(data) {
  const sqlStatement = `
      INSERT INTO questions
      (name, topic, question)
      VALUES
        ($1, $2, $3)
    ;`;
  questionData = Object.values(data);
  console.log(questionData);
  await query(sqlStatement, questionData);
}

async function deleteQuestion(id) {
  let sqlStatement = `
    DELETE FROM comments
    WHERE question_id = $1
  ;`;
  await query(sqlStatement, [id]);
  sqlStatement = `
    DELETE FROM questions
    WHERE id = $1
  ;`;
  await query(sqlStatement, [id]);
}

module.exports = {
  getQuestions,
  addQuestion,
  deleteQuestion,
};

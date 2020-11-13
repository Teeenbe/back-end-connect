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

module.exports = {
  getQuestions,
  addQuestion,
};

const { query } = require("../../index");

const questionsArray = [
  {
    name: "Bryan",
    topic: "React",
    question: "sos",
  },
  {
    name: "Jess",
    topic: "Functions",
    question: "why is this not working?",
  },
];

const sqlStatement = `
INSERT INTO questions
    (name, topic, question)
VALUES
    ($1, $2, $3)
;`;

async function populateTable() {
  let questionDataArray;
  for (question of questionsArray) {
    questionDataArray = Object.values(question);
    await query(sqlStatement, questionDataArray);
  }
}

populateTable();

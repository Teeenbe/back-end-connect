const { query } = require("../../index");

const commentsArray = [
  {
    text: "Uno",
    question_id: 1,
  },
  {
    text: "Dos",
    question_id: 1,
  },
  {
    text: "Lorem",
    question_id: 2,
  },
  {
    text: "Ipsum",
    question_id: 2,
  },
];

const sqlStatement = `
INSERT INTO comments
    (text, question_id)
VALUES
    ($1, $2)
;`;

async function populateTable() {
  let commentDataArray;
  for (comment of commentsArray) {
    commentDataArray = Object.values(comment);
    await query(sqlStatement, commentDataArray);
  }
}

populateTable();

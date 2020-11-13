const express = require("express");
const router = express.Router();

const { getQuestions, addQuestion } = require("../model/questions");
const { getComments, addComment } = require("../model/comments");

// let questions = [
//   {
//     id: 0,
//     name: "Bryan",
//     topic: "React",
//     question: "sos",
//     comments: [
//       { id: 0, text: "Uno" },
//       { id: 1, text: "Dos" },
//     ],
//   },
//   {
//     id: 1,
//     name: "Jess",
//     topic: "Functions",
//     question: "why is this not working?",
//     comments: [
//       { id: 0, text: "Lorem" },
//       { id: 1, text: "Ipsum" },
//     ],
//   },
// ];

/*

QUESTIONS

*/

// GET QUESTIONS
router.get("/", async function (req, res) {
  const questions = await getQuestions();
  res.json({
    message: "Success",
    payload: questions,
  });
});

// ADD QUESTION
router.post("/", async function (req, res) {
  const { payload } = req.body;
  console.log(payload);
  //   questions = payload;
  await addQuestion(payload);
  res.json({ success: true });
});

// DELETE QUESTION
router.delete("/:id", function (req, res) {
  const index = req.params.id;
  questions = [...questions.slice(0, index), ...questions.slice(index + 1)];
  res.json({ message: "Mission success", payload: questions });
});

/*

COMMENTS

*/

// GET COMMENTS
router.get("/:id", async function (req, res) {
  const id = req.params.id;
  const comments = await getComments(id);
  res.json({
    message: "Comments returned",
    payload: comments,
  });
});

// ADD COMMENT
router.post("/:id", async function (req, res) {
  const questionId = req.params.id;
  const { payload } = req.body;
  console.log(payload);
  //   questions[index].comments = payload;
  await addComment(payload);
  res.json({ success: true });
});

// DELETE COMMENT
router.delete("/:questionId/:commentId", function (req, res) {
  const questionId = req.params.questionId;
  const commentId = req.params.commentId;
  //   questions[questionId].comments = questions[questionId].comments.filter(
  //     (c) => c.id !== commentId
  //   );
  //   console.log(questions[questionId].comments);
  questions[questionId].comments = [
    ...questions[questionId].comments.slice(0, commentId),
    ...questions[questionId].comments.slice(commentId + 1),
  ];
  res.json({
    message: "Comment deleted",
    payload: questions[questionId].comments, // not totally efficient
  });
});

// router.put("/:id", function(req, res) {
//     const index = req.params.id;
//     const { name, topic, question } = req.body;
// });

module.exports = router;

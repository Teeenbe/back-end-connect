const express = require("express");
const router = express.Router();

const {
  getQuestions,
  addQuestion,
  deleteQuestion,
} = require("../model/questions");
const { getComments, addComment, deleteComment } = require("../model/comments");

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
    message: "Data sent",
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
router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  await deleteQuestion(id);
  res.json({ success: true });
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
  const { payload } = req.body;
  //   if (payload === undefined) {
  //     res.json({ success: false });
  //   }
  await addComment(payload);
  res.json({ success: true });
});

// DELETE COMMENT
router.delete("/:id/:commentId", async function (req, res) {
  const commentId = req.params.commentId;
  //   questions[questionId].comments = questions[questionId].comments.filter(
  //     (c) => c.id !== commentId
  //   );
  //   console.log(questions[questionId].comments);
  //   questions[questionId].comments = [
  //     ...questions[questionId].comments.slice(0, commentId),
  //     ...questions[questionId].comments.slice(commentId + 1),
  //   ];
  await deleteComment(commentId);
  res.json({ success: true });
});

// router.put("/:id", function(req, res) {
//     const index = req.params.id;
//     const { name, topic, question } = req.body;
// });

module.exports = router;

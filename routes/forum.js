const express = require("express");
const router = express.Router();

let questions = [
  {
    id: 0,
    name: "Bryan",
    topic: "React",
    question: "sos",
    comments: [
      { id: 0, text: "Uno" },
      { id: 1, text: "Dos" },
    ],
  },
  {
    id: 1,
    name: "Jess",
    topic: "Functions",
    question: "why is this not working?",
    comments: [
      { id: 0, text: "Lorem" },
      { id: 1, text: "Ipsum" },
    ],
  },
];

/*

QUESTIONS

*/

// GET QUESTIONS
router.get("/", function (req, res) {
  res.json({
    message: "Success",
    payload: questions,
  });
});

// ADD QUESTION
router.post("/", function (req, res) {
  const { payload } = req.body;
  console.log(payload);
  questions = payload;
  res.json({ message: "Questions updated", payload: questions });
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
router.get("/:id", function (req, res) {
  const index = req.params.id;
  res.json({
    message: "Comments returned",
    payload: questions[index].comments,
  });
});

// ADD COMMENT
router.post("/:id", function (req, res) {
  const index = req.params.id;
  const { payload } = req.body;
  console.log(payload);
  questions[index].comments = payload;
  res.json({ message: "Comments updated", payload: questions[index].comments });
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

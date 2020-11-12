const express = require("express");
const router = express.Router();

let questions = [
  {
    id: 0,
    name: "Bryan",
    topic: "React",
    question: "sos",
    comments: [
      { index: 0, text: "Uno" },
      { index: 1, text: "Dos" },
    ],
  },
  {
    id: 1,
    name: "Jess",
    topic: "Functions",
    question: "why is this not working?",
    comments: [
      { index: 0, text: "Lorem" },
      { index: 1, text: "Ipsum" },
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
// router.post("/:id")

// DELETE COMMENT
router.delete("/:questionId/:id", function (req, res) {
  const questionIndex = req.params.questionId;
  const commentIndex = req.params.id;
  questions[questionIndex].comments = [
    ...questions[questionIndex].comments.slice(0, commentIndex),
    ...questions[questionIndex].comments.slice(commentIndex + 1),
  ];
  res.json({
    message: "Comment deleted",
    payload: questions[questionIndex].comments,
  });
});

// router.put("/:id", function(req, res) {
//     const index = req.params.id;
//     const { name, topic, question } = req.body;
// });

module.exports = router;

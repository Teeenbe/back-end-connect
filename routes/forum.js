const express = require("express");
const router = express.Router();

let questions = [
  {
    id: 0,
    name: "Bryan",
    topic: "React",
    question: "sos",
  },
  {
    id: 1,
    name: "Jess",
    topic: "Functions",
    question: "why is this not working?",
  },
];

router.get("/", function (req, res) {
  res.json({
    message: "Success",
    payload: questions,
  });
});

router.post("/", function (req, res) {
  const { payload } = req.body;
  console.log(payload);
  questions = payload;
  res.json({ message: "Questions updated", payload: questions });
});

module.exports = router;

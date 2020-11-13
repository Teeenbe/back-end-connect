const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const forumRouter = require("./routes/forum");
const profilesRouter = require("./routes/profiles");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/forum", forumRouter);
app.use("/profiles", profilesRouter);

module.exports = app;

const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const storyRouter = require("./routes/Story");
const userRouter = require("./routes/User");
const topicRouter = require("./routes/Topic");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: "*",
  })
);

const SESSION_SECRET = process.env.SESSION_SECRET;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/stories", storyRouter);
app.use("/users", userRouter);
app.use("/topics", topicRouter);

app.listen(3002, () => {
  console.log("server running on port 3002");
});

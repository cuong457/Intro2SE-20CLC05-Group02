const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
// parsing cookies
const cookieParser = require("cookie-parser");

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(cors({ credentials: true }));
// HTTP logger
// app.use(morgan('combined'));

// Routes init

route(app);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Cookie"
  );
  next();
});

module.exports = app;

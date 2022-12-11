const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

// Custom middlewares
// app.use(SortMiddleware);

// HTTP logger
// app.use(morgan('combined'));

// Template engines

// Routes init
route(app);

module.exports = app;

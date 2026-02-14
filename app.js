var express = require("express");
var path = require("path");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(express.static("node_modules/"));

app.get("/about-us", function (req, res) {
  res.render("about-us", {});
});
app.get("/contact-us", function (req, res) {
  res.render("contact-us", {});
});
app.get("/test", function (req, res) {
  res.render("test", {});
});
app.get("/blog-detail", function (req, res) {
  res.render("blog-detail", {});
});

app.get("/blog", function (req, res) {
  res.render("blog", {});
});

app.listen(108, () => {
  console.log("working on 108");
});

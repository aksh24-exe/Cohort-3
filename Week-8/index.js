const express = require("express");

const app = express();

app.use(express.json());

app.post("/user/signin", (req, res) => {
  res.json({
    msg: "Signin in user",
  });
});

app.post("/user/signup", (req, res) => {
  res.json({
    msg: "Signup in user",
  });
});


app.get("/user/purchases", (req, res) => {
  res.json({
    msg: "Purchases Courses",
  });
});


app.post("/course/purchases", (req, res) => {
  res.json({
    msg: "Courses Added",
  });
});


app.get("/courses", (req, res) => {
  res.json({
    msg: "See all courses",
  });
});


app.listen(3000);

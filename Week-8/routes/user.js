const { Router } = require("express");

const userRoutes = Router();

userRoutes.post("/signin", (req, res) => {
  res.json({
    msg: "Signin in user",
  });
});

userRoutes.post("/signup", (req, res) => {
  res.json({
    msg: "Signup in user",
  });
});

userRoutes.get("/purchases", (req, res) => {
  res.json({
    msg: "Purchases Courses 2",
  });
});

module.exports = {
    userRoutes : userRoutes,
}
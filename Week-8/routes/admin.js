const { Router } = require("express");

const adminRoutes = Router();

adminRoutes.post("/signin", (req, res) => {
    res.json({
      msg: "Signin in user",
    });
  });
  
  adminRoutes.post("/signup", (req, res) => {
    res.json({
      msg: "Signup in user",
    });
  });
  
  
  adminRoutes.get("/purchases", (req, res) => {
    res.json({
      msg: "Purchases Courses",
    });
  });

  module.exports = {
    adminRoutes
  }
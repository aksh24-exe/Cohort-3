const { Router } = require("express");
const { courseModel, purchaseModel } = require("../db")
const courseRoutes = Router();

courseRoutes.post("/purchases", (req, res) => {
  res.json({
    msg: "Courses Added",
  });
});

courseRoutes.get("/courses", (req, res) => {
  res.json({
    msg: "See all courses",
  });
});

module.exports = {
    courseRoutes: courseRoutes
}
const { Router } = require("express");
const { courseModel, purchaseModel } = require("../db");
const courseRoutes = Router();
const { usermiddleware } = require("../middleware/user");

courseRoutes.post("/purchases", usermiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courceId;

  await courseModel.find({
    userId,
    courseId,
  });

  res.json({
    msg: "You have Sucessfully bought the course",
  });
});

courseRoutes.get("/preview", async (req, res) => {
  const course = await courseModel.find({});

  res.json({
    course,
  });
});

module.exports = {
  courseRoutes: courseRoutes,
};

const { Router } = require("express");
const { adminModel } = require("../db");
const adminRoutes = Router();
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminmiddleware } = require("../middleware/admin");
const course = require("./course");

adminRoutes.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    msg: "Signup in user",
  });
});

adminRoutes.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      msg: "Signin in user",
    });
  } else {
    res.status(403).json({
      msg: "Envalid Crediatial",
    });
  }
});

adminRoutes.post("/course", adminmiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, description, price, imageurl } = req.body;

  const course = await adminModel.create({
    title: title,
    description: description,
    price: price,
    imageurl: imageurl,
    courceId: adminId,
  });
  res.json({
    msg: "Course Creates",
    courseId: course._id,
  });
});

adminRoutes.put("/course", adminmiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, price, imageurl, courseId } = req.body;

  const course = await adminModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      price: price,
      imageurl: imageurl,
    }
  );
  res.json({
    msg: "Course Update",
    courseId: course._id,
  });
});

adminRoutes.get("/course/bulk", adminmiddleware, async (req, res) => {
  const adminId = req.userId;

  const course = await adminModel.find({
    courseId: adminId,
  });

  res.json({
    msg: "Course Updated",
    course,
  });
});

module.exports = {
  adminRoutes,
};

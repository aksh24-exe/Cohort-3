const { Router } = require("express");
const { adminModel } = require("../db");
const adminRoutes = Router();
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

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

adminRoutes.get("/purchases", (req, res) => {
  res.json({
    msg: "Purchases Courses",
  });
});

module.exports = {
  adminRoutes,
};

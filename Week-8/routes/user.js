const { Router } = require("express");
const { userModel } = require("../db");
const userRoutes = Router();
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config")


userRoutes.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if(user){
    const token = jwt.sign({
      id: user._id,
    },JWT_USER_PASSWORD);

    res.json({
      token: token,
    });
  }else{
    res.status(403).json({
      message: "Incorrect credentials"
  })
  }

  
});

userRoutes.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
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
  userRoutes: userRoutes,
};

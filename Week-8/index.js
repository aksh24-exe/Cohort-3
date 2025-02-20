const express = require("express");
// require("dotenv").config();
const { userRoutes } = require("./routes/user");
const { adminRoutes } = require("./routes/admin");
const { courseRoutes } = require("./routes/course");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

app.use("/api/v1/user",userRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/admin",adminRoutes);


async function main() {
    await mongoose.connect("mongodb+srv://itsakshat07sharma:oIMRYBjXNE1Sd1zv@cluster0.t2kvo.mongodb.net/course-backend");
    app.listen(3000);
    console.log("listening on Port 3000");
}

main();


const express = require("express");
const { userRoutes } = require("./routes/user");
const { adminRoutes } = require("./routes/admin");
const { courseRoutes } = require("./routes/course");
const app = express();

app.use(express.json());

app.use("/api/v1/user",userRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/admin",adminRoutes);




app.listen(3000);

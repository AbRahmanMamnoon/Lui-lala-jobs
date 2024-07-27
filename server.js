const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const connectDB = require("./src/config/db/connectdb");
const jobsRouter = require("./src/routes/jobsRouts");
const EmployerRouter = require("./src/routes/EmployerRoute");
const imageRouter = require("./src/routes/imageRoute");
const userRouter = require("./src/routes/userRoute");
// const post = require('./models/jobs');

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/employee", EmployerRouter);
app.use("/api/v1/images", imageRouter);
app.use("/api/v1/user", userRouter);

const port = process.env.PORT || 2000;
const start = async () => {
  const mongoURI = "mongodb://localhost:27017/CV-Library";
  try {
    await connectDB(mongoURI);
    console.log("Connected to MongoDB...");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

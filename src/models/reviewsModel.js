const mongoose = require("mongoose");
const Course = require("./courseModel");
const User = require("./userModel");

const reviewsSchema = mongoose.Schema(
  {
    reviewerName: String,
    reviewText: String,
    rating: Number,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true, // this field is required as a foreign key referencing the Course model
    },
  },
  { timestamps: true }
);

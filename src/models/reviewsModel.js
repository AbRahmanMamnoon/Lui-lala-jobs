const mongoose = require("mongoose");
const Course = require("./courseModel");
const User = require("./userModel");

const reviewsSchema = mongoose.Schema(
  {
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
    ratings: {
      type: Number,
      min: 1,
      max: 5,
    },
    slug: String,
  },
  { timestamps: true }
);

const review = mongoose.model("Reviews", reviewsSchema);
module.exports = review;

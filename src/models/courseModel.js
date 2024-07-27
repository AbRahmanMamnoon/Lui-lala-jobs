const mongoose = require("mongoose");
const Employer = require("./EmployersModel");

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    certificate: {
      type: String,
      required: true,
    },
    FAQs: {
      teype: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating Average at lest should be greater than 1"],
      max: [5, "Rating Average at lest should be smaller than 5"],
      set: (val) => Math.round(val * 10) / 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);

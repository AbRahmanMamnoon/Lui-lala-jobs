import mongoose from "mongoose";

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
    certificate: {
      type: String,
      required: true,
    },
    FAQs: {
      type: String, // The type was misspelled as "teype"
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
    },
  },
  { timestamps: true }
);
const Course = mongoose.model("Course", courseSchema);
export default Course;

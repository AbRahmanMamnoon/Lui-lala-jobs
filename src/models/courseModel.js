import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
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
      min: [1, "Rating Average at least should be greater than 1"],
      max: [5, "Rating Average at least should be smaller than 5"],
      set: (val) => Math.round(val * 10) / 10, // This is a valid set function
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;

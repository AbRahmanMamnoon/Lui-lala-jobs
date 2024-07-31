import mongoose from "mongoose";
import User from "../controllers/courseController.js";

const employerSchema = new mongoose.Schema(
  {
    empName: {
      type: String,
      required: [true, "Please provide company name"],
    },
    natureContent: {
      type: String,
      required: [true, "Please provide company nature"],
    },
    industry: {
      type: String,
      required: [true, "Provide industry name "],
    },
    website: {
      type: String,
      required: [true, "Please provide company website"],
    },
    contact_email: {
      type: String,
      required: [true, "Please provide contact email"],
    },
    contact_phone: {
      type: String,
      required: [true, "Please provide contact phone number"],
    },
    logo: {
      type: String,
      required: [true, "Please provide company logo"],
      default: "default-company-logo.png",
    },
    description: {
      type: String,
      required: [true, "Please provide company description"],
    },
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Employeer = mongoose.model("Employer", employerSchema);
export default Employeer;

import mongoose from "mongoose";
import validator from "validator";

import Job from './jobsModel.js';

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please enter a valid email address.",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      //match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },
    isAdmin: {
      type: Boolean,
      default: "false",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: "default-user-image.jpg",
    },
    cv: {
      type: String,
    },
    appliedJobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

export default User;

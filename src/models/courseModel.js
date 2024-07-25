const mongoose = require('mongoose');
const Employer = require('./EmployersModel');

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
    employerID: {
      type: mongoose.Schema.ObjectId,
      ref: 'Employer',
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);

const mongoose = require('mongoose');
const Employeer = require('./EmployersModel');

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
    },
    keyword: {
      type: String,
      required: [true, 'Please provide keyword'],
    },
    country: {
      type: String,
      required: [true, 'Please provide country'],
    },
    city: {
      type: String,
      required: [true, 'Please provide city'],
    },
    minSalary: {
      type: Number,
      required: [true, 'Please provide minimum salary'],
    },
    maxSalary: {
      type: Number,
      required: [true, 'Please provide maximum salary'],
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },

    salaryType: {
      type: String,
      enum: ['hourly', 'daily', 'monthly'],
      // default: "monthly",
      required: true,
    },
    location: {
      type: String,
      required: [true, 'Please provide location'],
    },
    empId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Employeer',
    },
    description: {
      type: String,
      required: [true, 'Please add your job description'],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Define a schema for image metadata

module.exports = mongoose.model('Job', JobSchema);

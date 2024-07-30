import Course from "../models/courseModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// Create a new course
export const createCourse = asyncHandler(async (req, res) => {
  const newCourse = await Course.create(req.body);
  res.status(201).json({
    success: true,
    data: [newCourse],
  });
});

// Get all courses
export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({
    count: courses.length,
    courses,
  });
});

// Get a single course
export const getCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  res.status(200).json(course);
});

// Update a course
export const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  res.status(200).json(course);
});

// Delete a course
export const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  res.status(200).json({ message: "Course deleted" });
});

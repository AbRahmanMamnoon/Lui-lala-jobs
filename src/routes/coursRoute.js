import express from "express";
// Importing the courseController
import {
  createCourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(authenticate, getAllCourses)
  .post(authenticate, authorizeAdmin, createCourse);

router
  .route("/:id")
  .get(authenticate, getCourse)
  .patch(authenticate, authorizeAdmin, updateCourse)
  .delete(authenticate, authorizeAdmin, deleteCourse);

export default router;

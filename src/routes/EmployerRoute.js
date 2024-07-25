const express = require("express");
const employerController = require("../controllers/EmployerController");
const router = express.Router();

router
  .route("/")
  // Create a new employer
  .post(employerController.createEmployer)
  // Get all employers
  .get(employerController.getEmployers);

router
  .route("/:id")
  // Get a single employer
  .get(employerController.getEmployer)
  // Update an existing employer
  .patch(employerController.updateEmployer)
  // Delete an employer
  .delete(employerController.deleteEmployer);
module.exports = router;

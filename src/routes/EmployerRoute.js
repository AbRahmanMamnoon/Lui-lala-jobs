import { Router } from 'express';
import {
  createEmployer,
  getAllEmployers,
  getEmployer,
  updateEmployer,
  deleteEmployer,
} from '../controllers/EmployerController.js';

import { authenticate } from '../middlewares/authMiddleware.js';

const router = Router();

router.route('/').get(authenticate, getAllEmployers);
router.route('/register').post(createEmployer);

router
  .route('/:id')
  // Get a single employer
  .get(getEmployer)
  // Update an existing employer
  .patch(updateEmployer)
  // Delete an employer
  .delete(deleteEmployer);
export default router;

import express from 'express';
const router = express.Router();

import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  findUserByID,
  deleteUserByID,
  updateUserById,
} from '../controllers/userController.js';

import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

router.route('/').get(authenticate, authorizeAdmin, getAllUsers);
router.route('/register').post(createUser);
router.route('/auth').post(loginUser);
router.route('/logout').post(logoutCurrentUser);
router
  .route('/profile')
  .get(authenticate, getCurrentUserProfile)
  .patch(authenticate, updateCurrentUserProfile);

router
  .route('/:id')
  .get(authenticate, authorizeAdmin, findUserByID)
  .patch(authenticate, authorizeAdmin, updateUserById)
  .delete(authenticate, authorizeAdmin, deleteUserByID);

export default router;

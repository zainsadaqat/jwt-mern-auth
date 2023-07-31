import express from 'express';
import {
  authenticateUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from '../controllers/users.controller.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);

router.post('/auth', authenticateUser);

router.post('/logout', logoutUser);

router.get('/profile', protect, getUserProfile);

router.put('/profile', protect, updateUserProfile);

export default router;

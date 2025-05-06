import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/UserRegister', registerUser);
router.post('/UserLogin', loginUser);

export default router;

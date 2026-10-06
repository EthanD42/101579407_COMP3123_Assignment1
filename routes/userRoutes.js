import express from 'express';
import { usersignup, userlogin } from '../controllers/userController.js';
import { validateSignup, validateLogin } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/signup', validateSignup, usersignup);
router.post('/login', validateLogin, userlogin);
export default router;
import express, { Router } from 'express';
import userController from "../controllers/userController";

export const router:express.Router=Router()

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/auth',userController.auth);

export { router as userRouter }
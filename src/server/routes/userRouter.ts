import express from 'express';
import { Router } from 'express';
import userController from '../controllers/userController';
import { errorHandler } from "../middleware/ErrorHandleMiddleware";

export const router: express.Router = Router();

router.post('/register', userController.register,errorHandler);
router.post('/login', userController.login,errorHandler);
router.get('/auth', userController.auth,errorHandler);

// Обработка ошибок должна быть добавлена в конце роутера
router.use(errorHandler);

export { router as userRouter };

import Router from 'express';
import userController from '../controllers/userController.js';

const router = new Router();
const {login, check, registration} = userController();

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', check);

export {router};

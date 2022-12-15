import {Router} from 'express';
import {router as deviceRouter} from './deviceRouter.js';
import {router as brandeRouter} from './brandRouter.js';
import {router as typeRouter} from './typeRouter.js';
import {router as userRouter} from './userRouter.js';

const routes = new Router();

routes.use('/type', typeRouter);
routes.use('/brand', brandeRouter);
routes.use('/user', userRouter);
routes.use('/device', deviceRouter);
export default routes;

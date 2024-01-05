import express, { Router, } from 'express';
import {brandRouter}  from "./brandRouter";
import { userRouter } from "./userRouter";
import { typeRouter } from "./typeRouter";
import { deviceRouter } from "./deviceRouter";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";

const router:express.Router =  Router()


router.use('/user',userRouter,errorHandler)
router.use('/type',typeRouter,errorHandler)
router.use('/brands',brandRouter,errorHandler)
router.use('/device',deviceRouter,errorHandler)
/*TODO: Добавить роуты для рейтинга*/
/*TODO: Добавить роуты для Корзины*/
router.use(errorHandler);


export default router

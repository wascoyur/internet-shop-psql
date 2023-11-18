import express, { Router,Request,Response } from 'express';
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

router.use((req: Request, res: Response) => {
  return res.status(404).json({ message: 'Ошибка при работе с типами товаров' });
});


export default router
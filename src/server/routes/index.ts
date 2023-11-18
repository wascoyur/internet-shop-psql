import express, { Router } from 'express';
import {brandRouter}  from "./brandRouter";
import { userRouter } from "./userRouter";
import { typeRouter } from "./typeRouter";
import { deviceRouter } from "./deviceRouter";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";

const router:express.Router =  Router()


router.use('/user',userRouter)
router.use('/type',typeRouter,errorHandler)
router.use('/brands',brandRouter)
router.use('/device',deviceRouter)


export default router
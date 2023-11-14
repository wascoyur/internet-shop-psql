import express, { Router } from 'express';
import {brandRouter}  from "./brandRouter";
import { userRouter } from "./userRouter";
import { typeRouter } from "./typeRouter";
import { deviceRouter } from "./deviceRouter";

const router:express.Router =  Router()


router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/brands',brandRouter)
router.use('/device',deviceRouter)

export default router
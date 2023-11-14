import express, { Router } from 'express';
import {brandRouter}  from "./brandRouter";

const router:express.Router =  Router()


// router.use('/user')
// router.use('/type')
router.use('/brand',brandRouter)
// router.use('/device')

export default router
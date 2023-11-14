import express, { Router } from 'express';
import { createType, getTypes, patchType } from "../controllers/typeController";

export const router:express.Router=Router()

router.post('/create', createType);
router.get('/getTypes', getTypes);
router.patch('/patchType/:id',patchType);

export { router as typeRouter }
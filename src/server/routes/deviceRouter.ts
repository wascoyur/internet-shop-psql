// routes/deviceRouter.ts
import express from 'express';
import * as deviceController from '../controllers/deviceController';

const router = express.Router();

router.post('/create', deviceController.createDevice);
router.get('/devices', deviceController.getDevices);
router.get('/devices/:id', deviceController.getDevices);
router.patch('/update', deviceController.updateDevice);
router.delete('/delete', deviceController.deleteDevice);



export { router as deviceRouter }
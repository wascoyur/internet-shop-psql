import Router from 'express';
import deviceController from "../controllers/deviceController.js";

const router = new Router();
const{addDevice,getDevice}=deviceController()

router.get('/getdevice',getDevice);
router.get('/getdevice/:id',getDevice);
router.post('/add-device',addDevice)

export {router};

import Router from 'express';
import deviceController from "../controllers/deviceController.js";

const router = new Router();
const{addDevice,getDevices}=deviceController()

router.get('/getdevice',getDevices);
router.get('/getdevice/:id',getDevices);
router.post('/adddevice',addDevice)

export {router};

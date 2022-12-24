import Router from 'express';
import brandController from "../controllers/brandController.js";

const router = new Router();

const {getBrand,addBrand}=brandController()

router.post('/setbrand',addBrand);
router.get('/getbrands',getBrand);
router.get('/getbrands/:id',getBrand);

export {router};

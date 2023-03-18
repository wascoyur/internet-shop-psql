import Router from "express";
import brandController from "../controllers/brandController.js";

const router = new Router();

const {getBrand, addBrand} = brandController();

router.post('/create-brand', addBrand);
router.get('/get-brands', getBrand);
router.get('/get-brands/:id', getBrand);
router.delete('/delet-ebrand/:id'); /** todo: реализовать удаление бренда **/

export {router};

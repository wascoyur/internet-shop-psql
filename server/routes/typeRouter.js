import Router from "express";
import typeController from "../controllers/typeController.js";

const router = new Router();
const {createType, getType} = typeController();
router.get('/get-type', getType);
// router.get('/get-type/:id',getType);
router.post('/create-type', createType);

export {router};

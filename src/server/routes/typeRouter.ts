import express, { Router, Request,Response } from 'express';
import { createType, getTypes, patchType } from "../controllers/typeController";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";

export const router:express.Router=Router()

router.post('/create', createType);
router.get('', getTypes,errorHandler);
router.get('/:id', getTypes,errorHandler);
router.patch('/edit-type/:id',patchType,errorHandler);

router.use((req: Request, res: Response) => {
  return res.status(404).json({ message: 'Ошибка при работе с типами товаров' });
});

export { router as typeRouter }
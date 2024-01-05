import express, { Router ,Request,Response} from 'express';
import { createBrand, deleteBrand, getBrands,patchBrand } from "../controllers/brandController";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";
import {getRole} from '../controllers/userController';

export const router:express.Router=Router()

router.post('/create',getRole('admin'), createBrand,errorHandler);
router.get('/brand/:id', getBrands,errorHandler);
router.delete('/delete/:id',getRole('admin'), deleteBrand,errorHandler);
router.patch('/edit/:id',getRole('admin'), patchBrand,errorHandler);
router.get('', getBrands,errorHandler);

router.use((req: Request, res: Response) => {
  return res.status(404).json({ message: 'Ошибка при работе с брэндами товаров' });
});


export { router as brandRouter }

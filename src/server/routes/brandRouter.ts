import express, { Router ,Request,Response} from 'express';
import { createBrand, deleteBrand, getBrands,patchBrand } from "../controllers/brandController";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";

export const router:express.Router=Router()

router.post('/create', createBrand,errorHandler);
router.get('/brand/:id', getBrands,errorHandler);
router.delete('/delete/:id', deleteBrand,errorHandler);
router.patch('/edit/:id', patchBrand,errorHandler);
router.get('', getBrands,errorHandler);

router.use((req: Request, res: Response) => {
  return res.status(404).json({ message: 'Ошибка при работе с брэндами товаров' });
});


export { router as brandRouter }
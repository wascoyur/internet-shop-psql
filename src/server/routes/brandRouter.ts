import express, { Router } from 'express';
import { createBrand, deleteBrand, getBrands } from "../controllers/brandController";

export const router:express.Router=Router()

router.post('/create', createBrand);
router.get('/brand/', getBrands);
router.delete('/delete/:id', deleteBrand);

export { router as brandRouter }
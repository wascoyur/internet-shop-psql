// deviceRouter.ts
import express, { Router,Response,Request } from 'express';
import { createDevice, deleteDevice, getDevices, updateDevice } from "../controllers/deviceController";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";

export const router: express.Router = Router();

router.post('/create', createDevice, errorHandler);
router.get('/:id', getDevices, errorHandler);
router.get('', getDevices, errorHandler);
router.delete('/delete/:id', deleteDevice, errorHandler);
router.patch('/edit/:id', updateDevice, errorHandler);
router.get('', getDevices, errorHandler);

router.use((req: Request, res: Response) => {
  return res.status(404).json({ message: 'Ошибка при работе с устройствами' });
});

export { router as deviceRouter };

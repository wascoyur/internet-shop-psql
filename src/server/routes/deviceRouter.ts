// deviceRouter.ts
import express, { Router,Response,Request } from 'express';
import {
  createDevice,
  deleteDevice,
  getAllDevices,
  getDeviceById,

  updateDevice
} from "../controllers/deviceController";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";
import {getRole} from '../controllers/userController';

export const router: express.Router = Router();

router.post('/create',getRole('admin'), createDevice, errorHandler);
router.get('/:id', getDeviceById, errorHandler);
router.get('', getAllDevices, errorHandler);
router.delete('/delete/:id',getRole('admin'), deleteDevice, errorHandler);
router.patch('/edit/:id', getRole('admin'),updateDevice, errorHandler);

router.use((req: Request, res: Response) => {
  return res.status(404).json({ message: 'Ошибка при работе с устройствами' });
});

export { router as deviceRouter };

// deviceController.ts
import { Request, Response, NextFunction } from 'express';
import { prisma } from "../main";

export const createDevice = async (req: Request, res: Response, next: NextFunction) => {
  const { name, typeId, brandId, price, rating, img } = req.body;

  try {
    const device = await prisma.device.create({
      data: {
        name: name,
        price: price,
        img: img,
        typeId: Number(typeId),
        brandId: Number(brandId),
      },
      include: { type: true, brand: true }
    });
    return res.json(device);
  } catch (e) {
    next(e);
  }
};

export const updateDevice = async (req: Request, res: Response, next: NextFunction) => {
  const deviceId = req.params.id;
  const { name, typeId, brandId, price, rating, img } = req.body;

  try {
    const updatedDevice = await prisma.device.update({
      where: { id: Number(deviceId) },
      data: {
        name: name,
        price: price,
        img: img,
        typeId: Number(typeId),
        brandId: Number(brandId),
        rating: rating // Если рейтинг нужно обновить
      },
      include: { type: true, brand: true }
    });
    return res.json(updatedDevice);
  } catch (e) {
    next(e);
  }
};

export const getDevices = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const devices = await prisma.device.findMany({
      include: { type: true, brand: true }
    });
    return res.json(devices);
  } catch (e) {
    next(e);
  }
};

export const deleteDevice = async (req: Request, res: Response, next: NextFunction) => {
  const deviceId = req.params.id;

  try {
    const deletedDevice = await prisma.device.delete({
      where: { id: Number(deviceId) }
    });
    return res.json(deletedDevice);
  } catch (e) {
    next(e);
  }
};

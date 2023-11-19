import { Request, Response, NextFunction } from 'express';
import { prisma } from "../main";
import { PrismaPromise } from '@prisma/client';

type PrismaResponse<T> = T extends PrismaPromise<infer U> ? U : never;
type PrismaDevice = PrismaResponse<ReturnType<typeof prisma.device.findUnique>>;
type PrismaDevices = PrismaResponse<ReturnType<typeof prisma.device.findMany>>;

export const createDevice = async (req: Request, res: Response, next: NextFunction) => {
  const { name, typeId, brandId, price, rating, img,deviceInfo } = req.body;

  try {
    const device = await prisma.device.create({
      data: {
        name: name,
        price: price,
        img: img,
        typeId: Number(typeId),
        brandId: Number(brandId),
        deviceInfo: { create:[{description: deviceInfo,title:deviceInfo }] }
      },
      include: { type: true, brand: true,deviceInfo:true }
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

export const getAllDevices = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const page = parseInt(req.query.page as string, 10) || 1;
  const pageSize = parseInt(req.query.pageSize as string, 10) || 10;
  const skip = (page - 1) * pageSize;

  try {
    const devices = await prisma.device.findMany({
      include: { type: true, brand: true },
      skip,
      take: pageSize,
    }) ;

    res.json(devices);
  } catch (e) {
    next(e);
  }
};

export const getDeviceById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  try {
    const device = await prisma.device.findUnique({
      where: { id },
      include: { type: true, brand: true },
    }) ;

    res.json(device);
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

import { Request, Response, NextFunction } from 'express';
import { prisma } from "../main";

export const createBrand = async(req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  try {
    const brand = await prisma.brand.create({ data: { name: name } });
    return res.json(brand);
  } catch (e) {
    next(e);
  }
};

export const getBrands = async(req: Request, res: Response, next: NextFunction) => {
  const brandId = req.params.id;

  try {
    if (brandId) {
      const brand = await prisma.brand.findUnique({ where: { id: Number(brandId) } });
      if (brand) {
        return res.json(brand);
      } else {
        return res.status(404).json({ message: 'Бренд не найден' });
      }
    } else {
      const brands = await prisma.brand.findMany();
      return res.json(brands);
    }
  } catch (e) {
    next(e);
  }
};

export const patchBrand = async(req: Request, res: Response, next: NextFunction) => {
  const brandId = req.params.id;
  const { name } = req.body;

  try {
    if (brandId) {
      const updatedBrand = await prisma.brand.update({
        where: { id: Number(brandId) },
        data: { name: name }
      });
      return res.json(updatedBrand);
    } else {
      return res.status(400).json({ message: 'Не указан идентификатор бренда' });
    }
  } catch (e) {
    next(e);
  }
};

export const deleteBrand = async (req: Request, res: Response, next: NextFunction) => {
  const brandId = req.params.id;

  try {
    if (brandId) {
      const deletedBrand = await prisma.brand.delete({ where: { id: Number(brandId) } });
      return res.json(deletedBrand);
    } else {
      return res.status(400).json({ message: 'Не указан идентификатор бренда' });
    }
  } catch (e) {
    next(e);
  }
};
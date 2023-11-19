import { HttpError } from "../errors/apiErrors";
import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  }

  // Обработка ошибок Prisma
  if (err instanceof Prisma.PrismaClientKnownRequestError || err instanceof Prisma.PrismaClientValidationError) {
    // Обработка конкретных ошибок Prisma, если необходимо
    return res.status(500).json({ message: `Ошибка Prisma`,error:`${err}` });
  }

  // Если это не экземпляр HttpError или PrismaClientKnownRequestError, обрабатываем как внутреннюю ошибку сервера
  return res.status(500).json({ message: 'Непредвиденная ошибка' });
};

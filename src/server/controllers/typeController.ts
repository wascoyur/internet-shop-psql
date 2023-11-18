import { Request, Response,NextFunction } from 'express';
import { prisma } from "../main";

export const createType = async(req: Request, res: Response, next:NextFunction) => {
  const {name}=req.body
  const authHeader = req.headers['authorization'];
  try {
  const type=await prisma.type.create({data:{name:name}})
  return res.json(type);
  }catch (e) {
    // Отправка сообщения об ошибке клиенту
    next(e)
  }
};

export const getTypes = async(req: Request, res: Response,next:NextFunction) => {

  const typeId = req.params.id;

  try {
    if (typeId) {
      // Если идентификатор указан, возвращаем конкретный тип
      const type = await prisma.type.findUnique({ where: { id: Number(typeId) } });
      if (type) {
        return res.json(type);
      } else {
        return res.status(404).json({ message: 'Тип не найден' });
      }
    } else {
      // Если идентификатор не указан, возвращаем все типы
      const types = await prisma.type.findMany();
      return res.json(types);
    }
  } catch (e) {
    next(e)
  }};

export const patchType = async(req: Request, res: Response, next: NextFunction) => {
  const typeId = req.params.id;
  const { name } = req.body;

  try {
    // Если идентификатор указан, обновляем данные для конкретного типа
    if (typeId) {
      const updatedType = await prisma.type.update({
        where: { id: Number(typeId) },
        data: { name: name }
      });
      return res.json(updatedType);
    } else {
      return res.status(400).json({ message: 'Не указан идентификатор типа' });
    }
  } catch (e) {
    next(e);
  }
}

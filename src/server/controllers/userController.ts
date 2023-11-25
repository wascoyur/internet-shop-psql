import { NextFunction, Request, Response } from "express";
import { prisma } from "../main";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserLogin, UserRegister } from "../types/TypeUser";
import { errorHandler } from "../middleware/ErrorHandleMiddleware";

const SECRET_KEY=`secret_key_0kjhgt45`



const generateAccessToken = (userId: number, email: string) => {
  return jwt.sign({ id: userId, email }, SECRET_KEY, { expiresIn: `24h` });
};

const register = async (req: UserRegister, res: Response, next: NextFunction) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password) {
      throw new Error(`Bad email or password`) ;
    }

    // Проверка, не зарегистрирован ли пользователь с таким email
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return next(new Error(`User with this email already exists`));
    }
    const hashPassword= await bcrypt.hash(password,5)

    // Создание нового пользователя
    const newUser = await prisma.user.create({
      data: {
        email,
        password:hashPassword,
        role,
      },
    });
    const basket= await prisma.basket.create(
      {
        data: {
          userId: newUser.id
        }
      }
    )

    const token = jwt.sign({id:newUser.id, email}, SECRET_KEY,{expiresIn:`24h`} )

    res.json({token});
  } catch (error) {
    return errorHandler(error as Error,req,res);
  }
};

const login = async (req: UserLogin, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    // Поиск пользователя по email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return next(new Error(`User not found`));
    }

    // Проверка пароля
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return next(new Error(`Invalid password`));
    }

    // Генерация токена доступа
    const token = generateAccessToken(user.id, user.email);

    res.json({ token });
  } catch (error) {
   return  errorHandler(error as Error,req,res);
  }
};

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Логика аутентификации пользователя

    res.json({ message: 'User authentication successful.' });
  } catch (error) {
    return errorHandler(error as Error,req,res,next);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ message: 'Token and new password are required' });
    }

    const decodedToken = jwt.verify(token, SECRET_KEY) as { id: number };

    // Находим пользователя в базе данных
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.id },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Хешируем новый пароль
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Обновляем пароль в базе данных
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Создаем новый JWT токен с обновленными данными пользователя
    const newToken = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '24h',
    });

    res.json({ token: newToken, message: 'Password reset successful' });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  checkAuth,
  resetPassword
};

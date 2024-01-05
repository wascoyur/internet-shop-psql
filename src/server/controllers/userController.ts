import {NextFunction, Request, Response} from 'express';
import {prisma} from '../main';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {UserLogin, UserRegister, UserRole} from '../types/TypeUser';
import {errorHandler} from '../middleware/ErrorHandleMiddleware';

const SECRET_KEY = `secret_key_0kjhgt45`;
type jwtToken = {
  id: string, email:string, role:string
}


const generateAccessToken = (userId: number, email: string, role: string) => {
  return jwt.sign({id: userId, email, role}, SECRET_KEY, {expiresIn: `24h`});
};

const register = async (req: UserRegister, res: Response, next: NextFunction) => {
  const {email, password, role} = req.body;

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
    const hashPassword = await bcrypt.hash(password, 5);

    // Создание нового пользователя
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
        role,
      },
    });
    const basket = await prisma.basket.create(
      {
        data: {
          userId: newUser.id,
        },
      },
    );

    const token = jwt.sign({id: newUser.id, email,role}, SECRET_KEY, {expiresIn: `24h`});

    res.json({token});
  } catch (error) {
    return errorHandler(error as Error, req, res);
  }
};

const login = async (req: UserLogin, res: Response, next: NextFunction) => {
  const {email, password} = req.body;

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
    const token = generateAccessToken(user.id, user.email, user.role);

    res.json({token});
  } catch (error) {
    return errorHandler(error as Error, req, res);
  }
};

const updateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Логика аутентификации пользователя

    res.json({message: 'User authentication successful.'});
  } catch (error) {
    return errorHandler(error as Error, req, res, next);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const generateResetToken = async (email: string) => {

    try {
      const user = await prisma.user.findUnique({
        where: {email},
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Генерация JWT для запроса сброса пароля с токеном, который будет хранить email пользователя
      const resetToken = jwt.sign({email}, SECRET_KEY, {expiresIn: '1h'});

      // Сохранение токена в базе данных или отправка на email пользователя

      return ({message: 'Reset token generated successfully', resetToken});
    } catch (error) {
      return errorHandler(error as Error, req, res);
    }
  };

};

export const getRole =  (role:UserRole) => {
  return function(req: Request, res: Response, next: NextFunction) {
  if (req.method === 'OPTIONS') next();
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({message: 'Not Autorized'});
    }
    const decoded = jwt.verify(token, SECRET_KEY) as jwtToken;
    if (decoded.role !== role) {
      return res.status(403).json({message: "Нет доступа"})
    }
    next()
  }
  catch (error) {res.status(401).json({message: 'Not Autorized'});}}
};

export default {
  register,
  login,
  updateToken,
  resetPassword,
  getRole,
};

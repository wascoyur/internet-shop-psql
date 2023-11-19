import { Request, Response, NextFunction } from 'express';
import { prisma } from "../main";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY=`secret_key_0kjhgt45`

interface UserRegister extends Request{
  body: {
    email:string,
    password:string,
    role:string}
}

const register = async (req: UserRegister, res: Response, next: NextFunction) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password) {
      return next(new Error(`Bad email or password`));
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
    next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Логика входа пользователя

    res.json({ message: 'User login successful.' });
  } catch (error) {
    next(error);
  }
};

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Логика аутентификации пользователя

    res.json({ message: 'User authentication successful.' });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  auth,
};

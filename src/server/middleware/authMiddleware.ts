import {Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserLogin } from "../types/TypeUser";
import { errorHandler } from "./ErrorHandleMiddleware";

const SECRET_KEY = `secret_key_0kjhgt45`;

export const isAuth = (req: UserLogin, res: Response, next: NextFunction) => {
  if (req.method === `OPTIONS`) {
    return next();
  }

  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new Error('Unauthorized') as Error;
    }

    const decodedToken = jwt.verify(token, SECRET_KEY);
    req.authToken = decodedToken; // Добавление информации о пользователе к объекту запроса

    next();
  } catch (e ) {
    const error = e as Error
    return errorHandler(error as Error,req, res,next)
  }
};

import { Request, Response } from 'express';

const register = async(req: Request, res: Response) => {
  res.json({ message: 'User registration successful.' });
};

const login = async(req: Request, res: Response) => {
  res.json({ message: 'User login successful.' });
};

const auth =async (req: Request, res: Response) => {
  res.json({ message: 'User authentication successful.' });
};

export default {
  register,
  login,
  auth,
};

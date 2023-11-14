import { Request, Response } from 'express';

export const createType = async(req: Request, res: Response) => {
  res.json({ message: "This is a POST request for creating a type." });
};

export const getTypes = async(req: Request, res: Response) => {
  res.json({ message: "This is a GET request for fetching types." });
};

export const patchType = async(req: Request, res: Response) => {
  res.json({ message: "This is a DELETE request for deleting a type." });
};

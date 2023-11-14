import { Request, Response } from 'express';

// Создадим контроллеры для каждого метода роута
export const createBrand = async(req: Request, res: Response) => {
  res.json({ message: "This is a POST request for creating a brand." });
};

export const getBrands = async(req: Request, res: Response) => {
  const {id} =req.query
  res.json({ message: `This is a GET request for fetching brand: ${id}` });
};

export const deleteBrand = async(req: Request, res: Response) => {
  res.json({ message: "This is a DELETE request for deleting a brand." });
};

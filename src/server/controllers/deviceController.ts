// controllers/deviceController.ts
import { Request, Response } from 'express';

export const createDevice = async(req: Request, res: Response) => {
  res.json({ message: "This is a POST request for creating a device." });
};

export const getDevices = async(req: Request, res: Response) => {
  res.json({ message: "This is a GET request for fetching devices." });
};

export const updateDevice = async(req: Request, res: Response) => {
  res.json({ message: "This is a PATCH request for updating a device." });
};

export const deleteDevice =async (req: Request, res: Response) => {
  res.json({ message: "This is a DELETE request for deleting a device." });
};

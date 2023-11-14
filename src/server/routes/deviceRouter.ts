import express, { Router, Request, Response } from 'express';

export const router:express.Router=Router()

router.post('/', (req: Request, res: Response) => {
  res.json({deviceRouter: "This is a POST request. deviceRouter" });
});
router.get('/', (req: Request, res: Response) => {
  res.json('brandRouter:This is a GET request.deviceRouter');
});

export { router as deviceRouter }
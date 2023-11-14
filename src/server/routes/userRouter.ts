import express, { Router, Request, Response } from 'express';

export const router:express.Router=Router()

router.post('/', (req: Request, res: Response) => {
  res.json({ userRouter:"This is a POST request." });
});
router.get('/', (req: Request, res: Response) => {
  res.json({userRouter: "This is a GET request." });
});router.get('/:id', (req: Request, res: Response) => {
  res.json('This is a GET request.');
});

export { router as userRouter }
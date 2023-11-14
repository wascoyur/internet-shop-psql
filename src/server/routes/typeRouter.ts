import express, { Router, Request, Response } from 'express';

export const router:express.Router=Router()

router.post('/', (req: Request, res: Response) => {
  res.json('This is a POST request. typeRouter');
});
router.get('/', (req: Request, res: Response) => {
  res.json('This is a GET request typeRouter.');
});

export { router as typeRouter }
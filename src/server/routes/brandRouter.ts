import express, { Router, Request, Response } from 'express';

export const router:express.Router=Router()

router.post('/', (req: Request, res: Response) => {
  res.json({brandRouter: "This is a POST request. brandRouter" });
});
router.get('/', (req: Request, res: Response) => {
   res.json('brandRouter:This is a GET request.brandRouter');
});

export { router as brandRouter }
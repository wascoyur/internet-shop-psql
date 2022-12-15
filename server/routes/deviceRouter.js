import Router from 'express';

const router = new Router();

router.get('/');
router.get('/:id');
router.post('/');

export {router};

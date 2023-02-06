export function errorHandler(err, req, res, next) {
  console.log(`{err}:`, Object.prototype.constructor(err));
  if (err instanceof Error) {
    return res.status(err.status).json({message: err.message});
  }
  return res.status(500).json({message: 'Непередвиденная ошибка'});
}

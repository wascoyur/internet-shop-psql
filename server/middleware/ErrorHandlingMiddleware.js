import { ApiErrors, ErrorValue } from "../error/ApiError.js";

export function errorHandler(err, req, res, next) {
  console.log('errorHandler',{err} );
  if (err.status === ErrorValue.NOT_FOUND) {
    return res.json({message: err.message});
  }
  return res.status(500).json({message: 'Непередвиденная ошибка'});
}

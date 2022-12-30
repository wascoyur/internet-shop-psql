export const ApiError = (status, message) => {
  Error.call(this);
  const badRequest = (status, message) => {
    return new ApiError(404, message);
  };
  const internal = (message) => {
    return new ApiError(500, message);
  };
  const forbidden = (message) => {
    return new ApiError(403, message);
  };
};

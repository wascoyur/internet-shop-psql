const ApiError = () => {
  const NOT_FOUND = `404`;

  const badRequest = (status, message) => {
    return new Error(NOT_FOUND, message);
  };
  const internal = (status, message) => {
    return new Error(500, message);
  };
  const forbidden = (status, message) => {
    return new Error(403, message);
  };
  return {badRequest, internal, forbidden};
};

export {ApiError};

const ApiErrors = () => {
  const apiError=(status,message)=>{
    return {status,message}
  }
  const badRequest = (status, message) => {
    return apiError(status,message);
  };
  const internal = (status, message) => {
    return apiError(status, message);
  };
  const forbidden = (status, message) => {
    return apiError(status, message);
  };
  return {badRequest, internal, forbidden};
};
export const ErrorValue = {NOT_FOUND:404,INTERNAL_ERR:500,FORBIDDEN:503};

export {ApiErrors};

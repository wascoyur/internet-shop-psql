import { ApiErrors, ErrorValue } from "../error/ApiError.js";

function userController() {
  const {badRequest, internal, forbidden} = ApiErrors();
  const registration = async (req, res) => res.json('registration');
  const login = async (req, res) => res.json('login');
  const check = async (req, res, next) => {
    const {id} = req.query;
    if (!id) {
      return next(badRequest(ErrorValue.NOT_FOUND, `не задан ID`));
    }
    return res.json(id);
  };
  return {registration, login, check};
}

export default userController;

import { Type } from "../models/models.js";

function typeController() {
  const createType = async (req, res) => {
    return res.json(req.address);
  };
  const getType = async (req, res) => {

  };
  return { createType,  getType, };
}

export default typeController;

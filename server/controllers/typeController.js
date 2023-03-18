import { Type } from "../models/models.js";

function typeController() {
  const createType = async (req, res) => {
    const type = await Type.create({name: req.body.type});
    return res.json(type);
  };
  const getType = async (req, res) => {
    // const id = req.params;
    console.log({req});
    const types = await Type.findAll();
    return res.json(types);
  };
  return {createType, getType};
}

export default typeController;

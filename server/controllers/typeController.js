import { Type } from "../models/models.js";

function typeController() {
  const createType = async (req, res) => {
    const type = await Type.create({name: req.body.type});
    return res.json(type);
  };
  const getType = async (req, res) => {
    const name = req.params.id;
    let param = {where: {name}};
    if (!name) {
      param = {};
    }
    const r = await Type.findAll(param);
    console.log({r});
    return res.json(r);
  };
  return {createType, getType};
}

export default typeController;

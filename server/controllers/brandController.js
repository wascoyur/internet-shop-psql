import { Type } from "../models/models.js";

function brandController() {
  const addBrand = async (req, res) => {
    const brand = await Type.create(req.body.name);
    res.json(brand);
  };
  const getBrand = async (req, res) => {
    console.log(req.d);

    return res.json({getBrand: req.params});
  };
  return {addBrand, getBrand};
}

export default brandController;

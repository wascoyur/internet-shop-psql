function brandController() {
  const addBrand = async (req, res) => res.json('addBrand');
  const getBrand = async (req, res) => {
    console.log(req.d);
    return res.json({ "getBrand": req.params });
  };
  return { addBrand, getBrand, };
}

export default brandController;

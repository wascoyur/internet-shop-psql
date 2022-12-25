function typeController() {
  const createType = async (req, res) => res.json(req.address);
  const getType = async (req, res) => {
    return res.json({ "getType": req.query });
  };
  return { createType,  getType, };
}

export default typeController;

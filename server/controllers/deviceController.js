function deviceController() {
  const getDevice = async (req, res) => {
    res.json({ "get devices" : req.params});
  };
  const addDevice = async (req, res) => res.json({'req':req.params});
  return {getDevice,addDevice};
}

export default deviceController;

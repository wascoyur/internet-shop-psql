function deviceController() {
  const getDevices = async (req, res) => {
    res.json({ "get devices" : req.params});
  };
  const addDevice = async (req, res) => res.json('adddevice');
  return {getDevices,addDevice};
}

export default deviceController;

function userController() {
  const registration = async (req, res) => res.json('registration');
  const login = async (req, res) => res.json('login');
  const check = async (req, res) => res.json({ check: "check" });
  return {registration, login, check};
}

export default userController;

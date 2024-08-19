const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the email is already registered
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

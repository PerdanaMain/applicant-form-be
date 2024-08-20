const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.getUserByEmail(email);

    if (user) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.createUser({
      email,
      password: hashedPassword,
      roleId: 2,
    });

    return res.status(201).json({ message: "User created", user: newUser });

    // Check if the email is already registered
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = User.getUserByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "Email is not registered" });
    }

    const validPassword = bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};

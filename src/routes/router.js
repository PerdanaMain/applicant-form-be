const express = require("express");
const { register, login, logout } = require("../controllers/authController");

const router = express.Router();

// Root API
router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Auth API
router.post("/auth/register", register);
router.post("/auth/login", login);
router.delete("/auth/logout", logout);

module.exports = router;

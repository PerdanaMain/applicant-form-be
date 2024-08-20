const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const { refreshToken } = require("../controllers/refreshToken");
// const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

// Root API
router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Auth API
router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/token", refreshToken);
router.delete("/auth/logout", logout);

module.exports = router;

const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// Root API
router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Auth API
router.post("/auth/register", register);

router.post("/auth/login", login);

module.exports = router;

const express = require("express");

const router = express.Router();

const prefix = "/api/v1";

// Root API
router.get(prefix + "/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Auth API
router.post(prefix + "/auth/register", (req, res) => {
  res.status(200).json({ message: "Register" });
});

router.post(prefix + "/auth/login", (req, res) => {});

module.exports = router;

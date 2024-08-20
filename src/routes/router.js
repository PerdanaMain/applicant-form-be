const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const { refreshToken } = require("../controllers/refreshToken");
const { create, show } = require("../controllers/biodataController");
const { verifyToken } = require("../middlewares/verifyToken");
const biodataValidator = require("../middlewares/biodataValidator");

const router = express.Router();

/*
===================================================================================
================================= ROUTES ==========================================
===================================================================================
*/
router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Auth API
router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/token", refreshToken);
router.delete("/auth/logout", logout);

// Biodata API
router.get("/biodata", verifyToken, show);
router.post("/biodata", verifyToken, biodataValidator, create);

module.exports = router;

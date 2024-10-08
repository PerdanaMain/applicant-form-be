const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const {
  create,
  show,
  index,
  update,
  destroy,
} = require("../controllers/biodataController");
const { verifyToken } = require("../middlewares/verifyToken");
const { verifyAdmin } = require("../middlewares/verifyAdmin");
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
router.delete("/auth/logout", logout);

// Biodata API
router.get("/biodata", verifyToken, show);
router.post("/biodata", verifyToken, biodataValidator, create);

router.get("/biodatas", verifyAdmin, index);
router.put("/biodata/:biodataId", verifyAdmin, update);
router.delete("/biodata/:biodataId", verifyAdmin, destroy);

module.exports = router;

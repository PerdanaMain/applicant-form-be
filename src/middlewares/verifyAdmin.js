const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.user = decoded;
    if (req.user.roleId !== 1) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  });
};

module.exports = {
  verifyAdmin,
};

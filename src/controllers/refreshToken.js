const User = require("../models/user");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const user = await User.getUserByRefreshToken(refreshToken);

    if (!user) {
      return res.status(403).json({ message: "Forbidden" });
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, decoded) => {
        if (error) {
          return res.status(403).json({ message: "Forbidden" });
        }

        const accessToken = jwt.sign(
          {
            userId: decoded.userId,
            email: decoded.email,
            roleId: decoded.roleId,
            roleName: decoded.roleName,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1h",
          }
        );

        return res.status(200).json({ accessToken });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { refreshToken };

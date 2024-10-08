import { decodeToken } from "../utils/jwt.util.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (token) {
      const decodeInfo = decodeToken(token);
      req.userId = decodeInfo;
      next();
    } else {
      res.status(403).send({
        success: false,
        message: "Access denied!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Auth middleware error: " + error.message,
    });
  }
};

const adminCheckMiddleware = async (req, res, next) => {
  const { role } = req.user;

  try {
    if (role === "admin") {
      next();
    } else {
      res.status(403).send({
        success: false,
        message: "Accessable for admin only!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Admin check middleware error: " + error.message,
    });
  }
};

export { authMiddleware, adminCheckMiddleware };

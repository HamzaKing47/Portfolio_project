import { decodeToken } from "../utils/jwt.util.js";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader
    ? authHeader.split(" ")[0] === "Bearer"
      ? authHeader.split(" ")[1]
      : authHeader
    : null;

  try {
    if (token) {
      const decodeInfo = decodeToken(token);

      if (decodeInfo) {
        req.user = decodeInfo; // Store decoded info as req.user
        next();
      } else {
        res.status(403).send({
          success: false,
          message: "Token is invalid or expired!",
        });
      }
    } else {
      res.status(403).send({
        success: false,
        message: "Access denied! No token provided",
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
  try {
    if (!req.user) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }

    const { role } = req.user; // Role should now be available in req.user
    if (role === "admin") {
      next();
    } else {
      res.status(403).send({
        success: false,
        message: "Accessible for admin only!",
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

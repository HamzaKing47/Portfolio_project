import { decodeToken } from "../utils/jwt.util.js";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).send({
      success: false,
      message: "Access denied! No token provided",
    });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const decodeInfo = decodeToken(token);

    if (decodeInfo) {
      req.user = decodeInfo; // Store decoded info as req.user
      req.userId = decodeInfo.id;
      next();
    } else {
      res.status(403).send({
        success: false,
        message: "Token is invalid or expired!",
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

import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

const generateToken = (text) => {
  try {
    return jwt.sign(text, secretKey, { expiresIn: "3d" });
  } catch (error) {
    console.log("generate token error: " + error.message);
  }
};

const decodeToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.log("Decode token error: " + error.message); 
    return null;
  }
};

export { generateToken, decodeToken };

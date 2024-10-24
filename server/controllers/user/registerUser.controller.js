import User from "../../models/user.model.js";
import { hashPassword } from "../../utils/bcrypt.util.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.fields;

    const newUser = new User({
      name,
      email,
      password: await hashPassword(password),
    });
    await newUser.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "User register error, Error: " + error.message,
    });
  }
};

export default registerUser;

import User from "../../models/user.model.js";
import { comparePassword } from "../../utils/bcrypt.util.js";
import { generateToken } from "../../utils/jwt.util.js";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.fields;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not exist",
      });
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).send({
      success: true,
      message: "User logged in successfully",
      token: generateToken({ id: user._id }),
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "User login error, Error: " + error.message,
    });
  }
};

export default loginUser;

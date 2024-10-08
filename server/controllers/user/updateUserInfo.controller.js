import User from "../../models/user.model.js";
import { hashPassword } from "../../utils/bcrypt.util.js";

const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.fields;

    if (updatedData.password) {
      updatedData.password = await hashPassword(updatedData.password);
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      res.status(404).send({
        success: false,
        message: "User not exist!",
      });
    }

    res.status(200).send({
      success: true,
      message: "Data updated successfully",
      updatedUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Update user info error: " + error.message,
    });
  }
};

export default updateUserInfo;

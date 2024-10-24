import User from "../../models/user.model.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(404).send({
        success: false,
        message: "No user exist",
      });
    }
    res.status(200).send({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Get user info error: " + error.message,
    });
  }
};

export default getAllUsers;

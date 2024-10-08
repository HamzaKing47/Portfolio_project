import User from "../../models/user.model.js";

const getUserInfo = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      res.status(404).send({
        success: false,
        message: "User not exist",
      });
    }
    res.status(200).send({
      success: true,
      message: "User info fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Get user info error: " + error.message,
    });
  }
};

export default getUserInfo;
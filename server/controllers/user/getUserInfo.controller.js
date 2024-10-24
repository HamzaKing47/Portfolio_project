import User from "../../models/user.model.js";

const getUserInfo = async (req, res) => {
  try {
    const loggedInUserId = req.user.id;
    const { id } = req.params;

    if (loggedInUserId !== id) {
      res.status(403).send({
        success: false,
        message: "You are not authorized to access this information.",
      });
    }

    const user = await User.findById(id);

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

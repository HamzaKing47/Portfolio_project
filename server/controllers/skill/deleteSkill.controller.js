import Skill from "../../models/skill.model.js";

const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkill = await Skill.findByIdAndDelete(id);
    if (!deletedSkill) {
      res.status(404).send({
        success: false,
        message: "Skill not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Delete skill error: " + error.message,
    });
  }
};

export default deleteSkill;

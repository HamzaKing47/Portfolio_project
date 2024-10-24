import Skill from "../../models/skill.model.js";

const editSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.fields;

    const skill = await Skill.findByIdAndUpdate(id, updatedData, { new: true });

    if (!skill) {
      res.status(404).send({
        success: false,
        message: "Skill not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Skill updated successfully",
      skill,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Edit skill error" + error.message,
    });
  }
};

export default editSkill;

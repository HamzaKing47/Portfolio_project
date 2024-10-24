import Skill from "../../models/skill.model.js";

const addSkill = async (req, res) => {
  try {
    const { name, level, description } = req.fields;

    const newSkill = new Skill({ name, level, description });
    await newSkill.save();

    res.status(200).send({
      success: true,
      message: "Skill added successfully",
      newSkill,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Add skill error: " + error.message,
    });
  }
};

export default addSkill;
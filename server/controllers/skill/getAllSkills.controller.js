import Skill from "../../models/skill.model.js";

const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    if (!skills) {
      res.status(404).send({
        success: false,
        message: "No skill found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Skills fetched successfully",
      skills,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Get all skills error",
    });
  }
};

export default getAllSkills;

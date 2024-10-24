import Project from "../../models/project.model.js";

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().select('-coverImage')

    if(!projects){
        res.status(404).send({
            success:false,
            message:"No project found!"
        })
    }

    res.status(200).send({
      success: true,
      message: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Get all projects error: " + error.message,
    });
  }
};

export default getAllProjects
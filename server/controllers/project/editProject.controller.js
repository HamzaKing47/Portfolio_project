import Project from "../../models/project.model.js";
import { readFile } from "fs/promises";

const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.fields;
    const file = req.files?.coverImage?.[0];

    if(typeof updatedData.technologies ==='string'){
        updatedData.technologies = updatedData.technologies.split(',').map(tech=>tech.trim())
    }

    const project = await Project.findById(id);

    if (!project) {
      res.status(404).send({
        success: false,
        message: "Project not found",
      });
    }

    for (const key in updatedData) {
      project[key] = updatedData[key];
    }

    if (file) {
      project.coverImage = {
        data: await readFile(file.filepath),
        contentType: file.mimetype,
      };
    }

    await project.save();

    res.status(200).send({
      success: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Edit project error: " + error.message,
    });
  }
};

export default editProject;

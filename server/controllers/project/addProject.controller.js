import Project from "../../models/project.model.js";
import { readFile } from "fs/promises";

const addProject = async (req, res) => {
  try {
    let { title, description, technologies, link } = req.fields;
    const file = req.files.coverImage ? req.files.coverImage[0] : null;

    if (typeof technologies === "string") {
      technologies = technologies.split(",").map((tech) => tech.trim());
    }

    const newproject = new Project({
      title,
      description,
      technologies,
      link,
    });

    if (file) {
      newproject.coverImage = {
        data: await readFile(file.filepath),
        contentType: file.mimetype,
      };
    }
    await newproject.save();

    res.status(201).send({
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Add project error: " + error.message,
    });
  }
};

export default addProject;

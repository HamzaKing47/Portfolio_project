import Project from "../../models/project.model.js";

const getProjectImage = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Project.findById(id).select("coverImage");

    if (!data) {
      res.status(404).send({
        success: false,
        message: "No cover image found",
      });
    }

    res
      .status(200)
      .contentType(data.coverImage.contentType)
      .send(data.coverImage.data);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Get project image error: " + error.message,
    });
  }
};

export default getProjectImage;

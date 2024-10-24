import Resume from "../../models/resume.model.js";

const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();

    if (!resume) {
      res.status(404).send({
        success: false,
        message: "Resume not found",
      });
    }

    res
      .status(200)
      .contentType(resume.filePath.contentType)
      .send(resume.filePath.data);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Get resume error: " + error.message,
    });
  }
};

export default getResume;

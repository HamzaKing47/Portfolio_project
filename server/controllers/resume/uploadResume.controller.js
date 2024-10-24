import Resume from "../../models/resume.model.js";
import { readFile } from "fs/promises";

const uploadResume = async (req, res) => {
  try {
    const file = req.files.filePath[0]; // Accessing the first file in the filePath array

    if (!file) {
      res.status(400).send({
        success: false,
        message: "No file uploaded",
      });
    }

    // delete if any resume exist previously
    await Resume.deleteMany();

    // Create a new Resume instance with the file data and content type
    const newResume = new Resume({
      filePath: {
        data: await readFile(file.filepath),
        contentType: file.mimetype,
      },
    });

    await newResume.save();

    res.status(201).send({
      success: true,
      message: "New resume added successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Add resume error: " + error.message,
    });
  }
};

export default uploadResume;

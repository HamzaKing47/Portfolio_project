import Blog from "../../models/blog.model.js";
import { readFile } from "fs/promises";

const addBlog = async (req, res) => {
  try {
    const { description, tags } = req.fields;
    const file = req.files.coverImage ? req.files.coverImage[0] : null; // Get the first file if it exists

    const newBlog = new Blog({ description, tags });

    // Check if the cover image is provided and read the file data
    if (file) {
      newBlog.coverImage = {
        data: await readFile(file.filepath),
        contentType: file.mimetype,
      };
    }

    await newBlog.save();

    res.status(201).send({
      success: true,
      message: "New blog added successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Add blog error: " + error.message,
    });
  }
};

export default addBlog;

import Blog from "../../models/blog.model.js";
import { readFile } from "fs/promises";

const addBlog = async (req, res) => {
  const { description, tags } = req.fields;
  const { coverImage } = req.files;

  try {
    const newBlog = new Blog({ description, tags });

    if (coverImage) {
      newBlog.coverImage.data = await readFile(coverImage.path);
      newBlog.coverImage.contentType = coverImage.type;
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

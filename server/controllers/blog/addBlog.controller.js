import Blog from "../../models/blog.model.js";
import { readFile } from "fs/promises";

const addBlog = async (req, res) => {
  try {
    const { title, excerpt, description, tags } = req.fields;
    const file = req.files.coverImage ? req.files.coverImage[0] : "placeholder.jpg";

    const newBlog = new Blog({
      title,
      excerpt,
      description,
      tags,
    });

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
      blog: newBlog,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Add blog error: " + error.message,
    });
  }
};

export default addBlog;

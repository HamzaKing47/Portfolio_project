import Blog from "../../models/blog.model.js";
import {readFile} from "fs/promises";

const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.fields;
    const file = req.files?.coverImage?.[0];

    const blog = await Blog.findById(id);

    if (!blog) {
      res.status(404).send({
        success: false,
        message: "No blog found",
      });
    }

    for (const key in updatedData) {
      blog[key] = updatedData[key];
    }

    if (file) {
      blog.coverImage = {
        data: await readFile(file.filepath),
        contentType: file.mimetype,
      };
    }

    await blog.save();

    res.status(200).send({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Edit blog error: " + error.message,
    });
  }
};

export default editBlog;

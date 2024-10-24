import Blog from "../../models/blog.model.js";
import { readFile } from "fs/promises";

const addBlog = async (req, res) => {
  const { description, tags } = req.fields;
  const { coverImage } = req.files;

  try {
    const newBlog = new Blog({ description, tags });

    // Check if coverImage is provided and handle it as an array
    if (coverImage && coverImage.length > 0) {
      const imageFile = coverImage[0]; // Access the first image in the array
      newBlog.coverImage.data = await readFile(imageFile.filepath); // Use filepath instead of path
      newBlog.coverImage.contentType = imageFile.mimetype; // Use mimetype instead of type
    } else {
      return res.status(400).send({
        success: false,
        message: "File upload failed, coverImage.path is undefined.",
      });
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

import Blog from "../../models/blog.model.js";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().select('-coverImage');

    if (!blogs) {
      res.status(404).send({
        success: false,
        message: "No blog found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "get all blogs error",
    });
  }
};

export default getAllBlogs;

import Blog from "../../models/blog.model.js";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().select("-coverImage");

    if (!blogs || blogs.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No blogs found",
      });
    }

    // Add cover image URL manually
    const formattedBlogs = blogs.map((blog) => ({
      ...blog.toObject(),
      cover: `/v1/blog-image/${blog._id}`, // This matches your working route
    }));

    res.status(200).send({
      success: true,
      message: "Blogs fetched successfully",
      blogs: formattedBlogs,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "get all blogs error",
    });
  }
};

export default getAllBlogs;

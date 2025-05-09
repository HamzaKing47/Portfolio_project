import Blog from "../../models/blog.model.js";

// Get single blog details
const getBlogDetails = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the blog by ID
    const blog = await Blog.findById(id);
    
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog post not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Blog details fetched successfully",
      blog: blog
    });
  } catch (error) {
    console.error("Blog details error:", error);
    res.status(500).send({
      success: false,
      message: "Error fetching blog details",
      error: error.message
    });
  }
};

// Get related blog posts
const getRelatedBlogs = async (req, res) => {
  try {
    const { id } = req.params;
    
    // First get the current blog to find its tags
    const currentBlog = await Blog.findById(id);
    
    if (!currentBlog || !currentBlog.tags || currentBlog.tags.length === 0) {
      return res.status(200).send({
        success: true,
        relatedBlogs: []
      });
    }

    // Find blogs with similar tags, excluding the current blog
    const relatedBlogs = await Blog.find({
      _id: { $ne: id }, // Not equal to current blog ID
      tags: { $in: currentBlog.tags } // Sharing at least one tag
    }).limit(3); // Limit to 3 related posts

    res.status(200).send({
      success: true,
      relatedBlogs: relatedBlogs
    });
  } catch (error) {
    console.error("Related blogs error:", error);
    res.status(500).send({
      success: false,
      message: "Error fetching related blogs",
      error: error.message
    });
  }
};

export { getBlogDetails, getRelatedBlogs };
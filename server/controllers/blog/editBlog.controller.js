import Blog from "../../models/blog.model";

const editBlogs = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.fields;

    const blogs = await Blog.findByIdAndUpdate(id, updatedData, { new: true });

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

export default editBlogs;

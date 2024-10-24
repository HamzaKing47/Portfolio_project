import Blog from "../../models/blog.model";

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

     const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Delete blog error",
    });
  }
};

export default deleteBlog;

import Blog from "../../models/blog.model.js";

const getBlogImage = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Blog.findById(id).select("coverImage");

    if (data) {
      res
        .status(200)
        .contentType(data.coverImage.contentType)
        .send(data.coverImage.data);
    } else {
      res.status(404).send({
        success: false,
        message: "No cover image found",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Get cover image error",
    });
  }
};

export default getBlogImage;

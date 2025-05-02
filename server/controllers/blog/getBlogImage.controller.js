// import Blog from "../../models/blog.model.js";

// const getBlogImage = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const blog = await Blog.findById(id).select("coverImage");

//     if (blog && blog.coverImage && blog.coverImage.data) {
//       res
//         .status(200)
//         .contentType(blog.coverImage.contentType || "image/jpeg")
//         .end(blog.coverImage.data);
//     } else {
//       console.log("No cover image found for blog:", id);
//       res.status(404).json({
//         success: false,
//         message: "No cover image found",
//       });
//     }
//   } catch (error) {
//     console.error("Error getting blog image:", error.message);
//     res.status(500).json({
//       success: false,
//       message: "Get cover image error",
//     });
//   }
// };


// export default getBlogImage;


import Blog from "../../models/blog.model.js";

const getBlogImage = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).select("coverImage");

    if (!blog?.coverImage?.data.toString("base64")) {
      return res.status(404).json({
        success: false,
        message: "No cover image found",
      });
    }

    res.set({
      "Content-Type": blog.coverImage.contentType,
      "Content-Length": blog.coverImage.data.length,
      "Cache-Control": "public, max-age=31536000",
      "Cross-Origin-Resource-Policy": "cross-origin",
    });

    res.end(blog.coverImage.data);
  } catch (error) {
    console.error("Error getting blog image:", error.message);
    res.status(500).json({
      success: false,
      message: "Error getting image",
    });
  }
};

export default getBlogImage;
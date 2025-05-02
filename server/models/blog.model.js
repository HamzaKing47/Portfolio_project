import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    coverImage: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);


const Blog = mongoose.model("Blogs", blogSchema);

export default Blog;

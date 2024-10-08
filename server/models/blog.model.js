import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    coverImage: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blogs", blogSchema);

export default Blog;

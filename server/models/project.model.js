import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: String,
        required: true,
      },
    ],
    link: {
      type: String,
      required: true,
    },
    coverImage: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Projects", projectSchema);

export default Project;

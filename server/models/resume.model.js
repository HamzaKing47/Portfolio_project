import mongoose, { Schema } from "mongoose";

const resumeSchema = new Schema(
  {
    filePath: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;

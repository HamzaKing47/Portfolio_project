import mongoose, { Schema } from "mongoose";

const resumeSchema = new Schema(
  {
    filePath: {
      type: String,
      reqired: true,
    },
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;

import mongoose, { Schema } from "mongoose";

const skillModel = new Schema({
  name: {
    type: String,
    reqired: true,
  },
  level: {
    type: String,
    enum: ["basic", "intermediate", "advanced"],
  },
  description:{
    type: String,
    trim: true
  }
});

const Skill = mongoose.model("Skills", skillModel);

export default Skill;

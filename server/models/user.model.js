import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
  name: {
    type: String,
    reqired: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+@.+\..+/,
  },
  password: {
    type: String,
    required:true,
    minLength: [8, 'Password cannot be less than 8 characters.']
  },
  role: {
    type: String,
    default: 'customer',
    enum: ['customer','admin']
  }
});

const User = mongoose.model('Users', userModel)

export default User
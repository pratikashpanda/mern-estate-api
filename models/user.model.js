import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1702698081~exp=1702698681~hmac=bb02f86f6ae1f3fc4304e746619c680c6ff5d50df7ecb113c969b9c077789281",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
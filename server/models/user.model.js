import mongoose from "mongoose";

const userSchema = mongoose.Schema(
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
    profilepicture: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhISn5NxpS40ZNVwY-3ORdpjF2Gf2YEE9Ww&s",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;

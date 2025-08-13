import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
      unique: true,
    },
    avatar: {
      type: String,
      default:
        "https://images.ctfassets.net/bgy6hnbo9i0l/4809IcYQSZZ15n006JvvkI/0bf38d0d86222da500999c9c793064ef/bayc-foreground_2x.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

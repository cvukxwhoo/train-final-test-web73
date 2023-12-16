import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  address: String,
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    phone: {
      type: Number,
      required: [true, "Phone Is Required!"],
      minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
      maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;

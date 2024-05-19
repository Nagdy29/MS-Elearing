import mongoose from "mongoose";

const insSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    graduation: { type: Number, require: true },
    phone: { type: Number, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    //cv: { type: String, require: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

const instModel = mongoose.model("instractor", insSchema);
export default instModel;

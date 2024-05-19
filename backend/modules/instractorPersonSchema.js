import mongoose from "mongoose";

const instPersonSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  jobTitle: { type: String, require: true },
  image: { type: String, require: true },
  lesson: { type: Number, require: true },
  phone: { type: Number, require: true },
});

const instPersonModel = mongoose.model("instPerson", instPersonSchema);
export default instPersonModel;

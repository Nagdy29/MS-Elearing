import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, require: true },
  category: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  price: { type: Number, require: true },
  lesson: { type: Number, require: true },
  video: { type: Number, require: true },
});

const courseModel = mongoose.model("course", courseSchema);
export default courseModel;

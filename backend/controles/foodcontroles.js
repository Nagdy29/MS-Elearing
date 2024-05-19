import fs from "fs";
import courseModel from "../modules/foodSchema.js";
//add food
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new courseModel({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    image: image_filename,
    price: req.body.price,
    lesson: req.body.lesson,
    video: req.body.video,
  });
  try {
    await food.save();
    res.json({ success: true, message: "food add" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const allFodd = async (req, res) => {
  try {
    const foods = await courseModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};
const Fodd = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await courseModel.findById(foodId);
    if (!food) {
      res.json({ success: false, message: "Not found" });
    }
    res.json({ success: true, message: "food", data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await courseModel.findById(req.body.id);
    fs.unlink(`uplodes/${food.image}`, () => {});
    await courseModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "remove " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { addFood, allFodd, removeFood, Fodd };

import fs from "fs";
import instPersonModel from "../modules/instractorPersonSchema.js";
//add food
const addPersone = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const persone = new instPersonModel({
    name: req.body.name,
    jobTitle: req.body.jobTitle,
    email: req.body.email,
    image: image_filename,
    lesson: req.body.lesson,
    phone: req.body.phone,
  });
  try {
    await persone.save();
    res.json({ success: true, message: "Persone add" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const allPersone = async (req, res) => {
  try {
    const persone = await instPersonModel.find({});
    res.json({ success: true, data: persone });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error", persone: Number(persone) });
  }
};
const persone = async (req, res) => {
  try {
    const personeId = req.params.id;
    const persone = await instPersonModel.findById(personeId);
    if (!persone) {
      res.json({ success: false, message: "Not found" });
    }
    res.json({ success: true, message: "persone", data: persone });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const removepersone = async (req, res) => {
  try {
    const personeId = await instPersonModel.findById(req.body.id);
    fs.unlink(`uplodes/instractor/${personeId.image}`, () => {});
    await instPersonModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "remove " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { addPersone, allPersone, removepersone, persone };

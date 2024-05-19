import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import instModel from "../modules/instractorSchema.js";

// login

const loginIns = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await instModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: " user dosent exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "invaild pass" });
    }
    const token = createToken(user._id);
    const { _id: id, name, phone } = user;
    res.json({
      success: true,
      token,
      id,
      name,
      email,
      phone,
      message: "success LoginInstractor",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, "nagdy");
};
// register

const registerInst = async (req, res) => {
  //let cv_form = `${req.file.filename}`;
  const { name, email, password, graduation, phone } = req.body;
  try {
    // check is ready exists
    const exists = await instModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: " email already exists " });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: " email not valide " });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: " please enter pass strong ",
      });
    }
    // has pass
    const hasPass = await bcrypt.hash(password, 10);
    const newUser = new instModel({
      name: name,
      email: email,
      password: hasPass,
      graduation: graduation,
      phone: phone,
      // cv: cv_form,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token, message: "success" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//all
const allInst = async (req, res) => {
  try {
    const inst = await instModel.find({});
    res.json({ success: true, data: inst });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

// remove
const removeInst = async (req, res) => {
  const persoeId = req.body.id;
  try {
    const user = await instModel.findByIdAndDelete(persoeId);
    if (!user) {
      return res.json({ success: false, message: " user Not Found" });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "User Not found" });
  }
};
export { loginIns, registerInst, allInst, removeInst };

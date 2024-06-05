import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../modules/userModels.js";

// login

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: " user dosent exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "invaild pass" });
    }
    const { _id: id, name, phone } = user;
    const token = createToken(user._id);
    res.json({ success: true, token, id, name, email, phone });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id, name) => {
  return jwt.sign({ id }, "nagdy");
};
// register

const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    // check is ready exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: " email already exists " });
    }
    const existsNU = await userModel.findOne({ phone });
    if (existsNU) {
      return res.json({ success: false, message: "Error Number" });
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
    const newUser = new userModel({
      name: name,
      email: email,
      password: hasPass,
      phone: phone,
    });
    const user = await newUser.save();
    const { _id: id } = user;
    const token = createToken(user._id);
    res.json({ success: true, token, name, id, phone, email });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// all user
const alluser = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// get user id

const getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.findById(userId).select("-password");
    if (!user) {
      return res.json({ success: false, message: " user Not Found" });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Not Found" });
  }
};

const removeUser = async (req, res) => {
  const userId = req.body.id;
  try {
    const user = await userModel.findByIdAndDelete(userId);
    if (!user) {
      return res.json({ success: false, message: " user Not Found" });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "User Not found" });
  }
};

export { loginUser, registerUser, getUser, alluser, removeUser };

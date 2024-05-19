import express from "express";
import multer from "multer";

import {
  allInst,
  loginIns,
  registerInst,
  removeInst,
} from "../controles/instracyorControl.js";
const instRouter = express.Router();

//image
const storage = multer.diskStorage({
  destination: "uplodes",

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
instRouter.post("/register", upload.single("cvv"), registerInst);
instRouter.post("/login", loginIns);
instRouter.get("/all", allInst);
instRouter.post("/remove", removeInst);

export default instRouter;

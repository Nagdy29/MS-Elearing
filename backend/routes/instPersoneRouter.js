import express from "express";

import multer from "multer";
import {
  addPersone,
  allPersone,
  persone,
  removepersone,
} from "../controles/instractorPersoneControll.js";

const personRouter = express.Router();
//image
const storage = multer.diskStorage({
  destination: "uplodes/instractor",

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
personRouter.post("/add", upload.single("image"), addPersone);
personRouter.get("/list", allPersone);
personRouter.get("/list/:id", persone);
personRouter.post("/remove", removepersone);

export default personRouter;

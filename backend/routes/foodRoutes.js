import express from "express";
import {
  Fodd,
  addFood,
  allFodd,
  removeFood,
} from "../controles/foodcontroles.js";
import multer from "multer";

const foodRouter = express.Router();
//image
const storage = multer.diskStorage({
  destination: "uplodes",

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", allFodd);
foodRouter.get("/list/:id", Fodd);
foodRouter.post("/remove", removeFood);

export default foodRouter;

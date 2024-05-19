import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/usrRouter.js";
import instRouter from "./routes/instRouter.js";
import personRouter from "./routes/instPersoneRouter.js";

const app = express();
const port = 4000;
//middleeare
app.use(express.json());
app.use(cors());
// db connaction
connectDB();

// api endpoint
app.use("/images", express.static("uplodes"));
app.use("/images", express.static("uplodes/instractor"));
app.use("/cv", express.static("uplodes/cv"));
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/inst", instRouter);
app.use("/api/persone", personRouter);

///
app.get("/", (req, res) => res.send("Hello sir"));
app.listen(port, () => console.log(`RUNNNNNING`));

//

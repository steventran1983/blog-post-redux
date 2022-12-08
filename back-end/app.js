import express from "express";

import bodyParser from "body-parser";

import morgan from "morgan";

import mongoose from "mongoose";

import cors from "cors";

import * as dotenv from "dotenv";

import indexRouter from "./routes/indexRouter.js";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(morgan("tiny"));

app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDb connected");
    app.listen(port, () => console.log(`App Running at port ${port}`));
  })
  .catch((error) => console.log("Cannot connect DB"));

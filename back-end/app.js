import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import cors from "cors";

import * as dotenv from "dotenv";

import indexRouter from "./routes/indexRouter.js";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use("/api", indexRouter);

app.get("/", (req, res) => {
  return res.send("Success ...");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());


mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDb connected");
    app.listen(port, () => console.log(`App Running at port ${port}`));
  })
  .catch((error) => console.log("Cannot connect DB"));

import express from "express";

import postsRouter from "./postsRouter.js";

const router = express.Router();

router.use("/api", postsRouter);

export default router;

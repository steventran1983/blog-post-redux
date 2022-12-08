import express from "express";
import { createPost, getPosts,editPost } from "../controllers/postControllers.js";

const router = express.Router();

router.get("/post", getPosts);
router.post("/post", createPost);
router.put("/update",editPost)
// router.get('/test', (req, res) => {
//   console.log(req.body);
// });

export default router;

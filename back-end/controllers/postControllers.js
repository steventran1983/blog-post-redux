import { json } from "express";

import mongoose from "mongoose";
import { PostModel } from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log(posts);
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "cannot get data from DB" });
  }
};

export const createPost = async (req, res, next) => {
  const { title, content, author, attach, likeCount, dislikeCount } = req.body;

  const newPost = new PostModel({
    title,
    content,
    author,
    attach,
    likeCount,
    dislikeCount,
  });

  try {
    await newPost.save();
    return res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "cannot save Post from DB" });
  }
};


export const editPost = async (req, res, next) => {
  try {
    const modifyPost = await PostModel.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
    return res.status(200).json(modifyPost);
  } catch (error) {
    return res.status(500).json({ message: "cannot save Post from DB" });
  }

}
import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();
import checkAuthenticated from "../middleware/auth.js";

router.get("/", getPosts);
router.post("/", checkAuthenticated, createPost);
router.patch("/:id", checkAuthenticated, updatePost);
router.delete("/:id", checkAuthenticated, deletePost);
router.patch("/:id/likePost", checkAuthenticated, likePost);

export default router;

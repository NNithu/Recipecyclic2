import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
} from "../controller/posts.js";


const router = express.Router();

router.get("/api/", getPosts);
router.post("/api/", createPosts);
router.patch("/api/:id", updatePosts);
router.delete("/api/:id", deletePosts);


export default router;

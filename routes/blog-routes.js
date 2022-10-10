import express from "express";
import { getAllBlogs, getBlogPost, addBlog, updateBlog, deletePost } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogPost);
blogRouter.post("/addBlog", addBlog);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deletePost);


export default blogRouter;
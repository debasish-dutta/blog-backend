import express from "express";
import { getAllBlogs, getBlogPost, addBlog, updateBlog, deletePost } from "../controllers/blog-controller";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:slug", getBlogPost);
blogRouter.post("/addBlog", addBlog);
blogRouter.put("/:slug", updateBlog);
blogRouter.delete("/:slug", deletePost);


export default blogRouter;
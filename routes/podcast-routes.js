import express from "express";
import { getAllPodcasts, getPodcast, addPodcast, updatePodcast, deletePodcast } from "../controllers/podcast-controller";
const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcasts);
podcastRouter.get("/:id", getPodcast);
podcastRouter.post("/addBlog", addPodcast);
podcastRouter.put("/:id", updatePodcast);
podcastRouter.delete("/:id", deletePodcast);


export default podcastRouter;
import express from "express";
import { getAllPodcasts, getPodcast, addPodcast, updatePodcast, deletePodcast } from "../controllers/podcast-controller";
const podcastRouter = express.Router();

podcastRouter.get("/", getAllPodcasts);
podcastRouter.get("/:slug", getPodcast);
podcastRouter.post("/addPodcast", addPodcast);
podcastRouter.put("/:slug", updatePodcast);
podcastRouter.delete("/:slug", deletePodcast);


export default podcastRouter;
import express from "express"
import { getAllUser, login } from "../controllers/admin-controller";

const router = express.Router();

router.get("/", getAllUser)
router.post("/login", login)

export default router;
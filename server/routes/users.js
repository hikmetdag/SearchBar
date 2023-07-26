import express from "express";
import { getUser,getUserId } from "../controllers/users.js";
const router = express.Router();

router.get("/", getUser);
router.get("/user:id", getUserId);
export default router;
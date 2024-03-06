import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserForSideBar } from "../controllers/sideBarUserController.js";
import { getChattedUsers } from "../controllers/chattedUserController.js";

const router = express.Router();

router.get("/",protectRoute, getUserForSideBar);
router.get("/conversations",protectRoute, getChattedUsers);

export default router;
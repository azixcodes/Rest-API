import express from "express";
import { getUsers, saveUser, getSingleUser } from "../controllers/users.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/save-user", saveUser);
router.get("/user/:id", getSingleUser);
export default router;

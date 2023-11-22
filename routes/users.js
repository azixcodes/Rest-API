import express from "express";
import {
  getUsers,
  saveUser,
  getSingleUser,
  deleteuser,
  signIn,
} from "../controllers/users.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/", saveUser);
router.get("/user/:id", getSingleUser);
router.delete("/user/:id", deleteuser);
router.post("/sign-in", signIn);
export default router;

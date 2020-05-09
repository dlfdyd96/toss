import express from "express";
import { createToken, createNewUser, getUserInfo } from "../controllers/usersController";
import { verifyToken } from "../middlewares";

const router = express.Router();

router.post("/login", createToken );
router.post("/new", createNewUser);
router.get('/me', verifyToken, getUserInfo);
export default router;
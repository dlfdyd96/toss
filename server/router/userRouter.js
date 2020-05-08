import express from "express";
import { createToken, createNewUser } from "../controllers/usersController";

const router = express.Router();

router.post("/login", createToken );
router.post("/new", createNewUser);

export default router;
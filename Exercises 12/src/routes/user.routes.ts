// src/routes/user.routes.ts
import express from "express";
import { registerUser, loginUser } from "../controllers/user.controller";

const router = express.Router();

// POST /users/register
router.post("/register", registerUser);

// POST /users/login
router.post("/login", loginUser);

export default router;

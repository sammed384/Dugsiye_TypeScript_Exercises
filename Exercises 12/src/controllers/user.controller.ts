// src/controllers/user.controller.ts
import express from "express";
import type { Request, Response } from "express";
import type { CreateUserBody, LoginBody } from "../types/user.d";

export const registerUser = (req: Request<{}, {}, CreateUserBody>, res: Response) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields required" });
    }
    res.status(201).json({ message: `User ${name} registered successfully!` });
};

export const loginUser = (req: Request<{}, {}, LoginBody>, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
    }
    res.status(200).json({ message: `User ${email} logged in successfully!` });
};

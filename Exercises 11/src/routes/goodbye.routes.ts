import { Router } from "express";
import { sayGoodbye } from "../controllers/goodbye.controller.js";

const router = Router();

router.get("/", sayGoodbye);

export default router;

// src/routes/product.routes.ts

import express from "express";           
import type { Request, Response } from "express"; 

const router = express.Router();

// GET /products?page=1&limit=10
type ProductQuery = { page?: string; limit?: string };

router.get("/", (req: Request<{}, {}, {}, ProductQuery>, res: Response) => {
    const { page = "1", limit = "10" } = req.query;
    res.send(`Page ${page} with ${limit} items`);
});

// PUT /products/:id
type Params = { id: string };
type Body = { name: string; price: number };

router.put("/:id", (req: Request<Params, {}, Body>, res: Response) => {
    const { id } = req.params;
    const { name, price } = req.body;

    res.json({ message: `Updated product ${id} with name ${name} and price ${price}` });
});

export default router;

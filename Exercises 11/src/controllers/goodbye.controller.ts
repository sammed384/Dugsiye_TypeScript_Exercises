import type { Request, Response } from "express";

interface GoodbyeRequest extends Request {
    query: {
        name: string;
    };
}

export const sayGoodbye = (req: GoodbyeRequest, res: Response) => {
    const { name } = req.query;

    // Runtime guard: required and non-empty
    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Query param 'name' is required and must be a non-empty string"
        });
    }

    return res.status(200).json({
        farewell: `Goodbye, ${name}`
    });
};

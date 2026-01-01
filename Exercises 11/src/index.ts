import express from "express";
import goodbyeRoutes from "./routes/goodbye.routes.js";

const app = express();

app.use("/goodbye", goodbyeRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

// src/server.ts
import express from "express";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(express.json());

s
app.use("/users", userRoutes);
app.use("/products", productRoutes);


app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

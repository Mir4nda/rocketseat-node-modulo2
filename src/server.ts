import cors from "cors";
import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app = express();

app.use(
  cors({
    origin: ["*", "http://127.0.0.1:3333", "http://localhost:3333"],
    allowedHeaders: ["*", "http://127.0.0.1:3333", "http://localhost:3333"],
  })
);

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log("okapa"));

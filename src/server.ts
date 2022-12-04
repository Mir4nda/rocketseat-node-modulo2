import cors from "cors";
import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app = express();

app.use(
  cors({
    origin: [
      "https://games.gdevelop-app.com",
      "https://game-previews.gdevelop.io",
      "http://127.0.0.1:3333",
      "http://localhost:3333",
    ],
    allowedHeaders: [
      "https://games.gdevelop-app.com",
      "https://game-previews.gdevelop.io",
      "http://127.0.0.1:3333",
      "http://localhost:3333",
    ],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log("okapa"));

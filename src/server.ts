import cors from "cors";
import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app = express();

app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
    methods: "*",
  })
);

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log("okapa"));

import { Router } from "express";

const categoriesRoutes = Router();

let categories = [];

categoriesRoutes.post("/categories", (req, res) => {
  const { name } = req.body;

  categories.push({
    name,
  });

  return res.status(201).send();
});

export { categoriesRoutes };

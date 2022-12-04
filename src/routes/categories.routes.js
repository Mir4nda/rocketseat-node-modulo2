"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
let categories = [];
categoriesRoutes.post("/categories", (req, res) => {
    const { name } = req.body;
    categories.push({
        name,
    });
    return res.status(201).send();
});

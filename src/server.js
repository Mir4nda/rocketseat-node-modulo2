"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const categories_routes_1 = require("./routes/categories.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["*", "http://127.0.0.1:3333", "http://localhost:3333"],
    allowedHeaders: ["*", "http://127.0.0.1:3333", "http://localhost:3333"],
}));
app.use(express_1.default.json());
app.use(categories_routes_1.categoriesRoutes);
app.listen(3333, () => console.log("okapa"));

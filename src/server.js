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
}));
app.use(express_1.default.json());
app.use(categories_routes_1.categoriesRoutes);
app.listen(3333, () => console.log("okapa"));

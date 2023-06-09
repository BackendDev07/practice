"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_service_1 = __importDefault(require("./db.service"));
const getAllProducts = async () => {
    const products = await db_service_1.default.getData("/products");
    return products;
};
const createProduct = async (title, description, price) => {
    const id = (await db_service_1.default.getData("/id"));
    const newId = id + 1;
    await db_service_1.default.push("/id", newId);
    const newProduct = {
        id: newId,
        title,
        description,
        price,
    };
    await db_service_1.default.push("/products[]", newProduct);
    return newProduct;
};
exports.default = {
    getAllProducts,
    createProduct,
};

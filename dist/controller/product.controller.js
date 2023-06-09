"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getAllProducts = void 0;
const product_service_1 = __importDefault(require("../service/product.service"));
const getAllProducts = async (req, res) => {
    const products = await product_service_1.default.getAllProducts();
    res.send({
        message: "All Product",
        products,
    });
};
exports.getAllProducts = getAllProducts;
const createProduct = async (req, res) => {
    const { title, description, price } = req.body;
    if (!title || !description || !price) {
        res.status(400).send({
            message: "title, description, price is required",
        });
        return;
    }
    const newProduct = await product_service_1.default.createProduct(title, description, price);
    res.send({
        messaga: "Product Created",
        product: newProduct,
    });
};
exports.createProduct = createProduct;

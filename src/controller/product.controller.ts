import { Request, Response } from "express";
import productService from "../service/product.service";

type ControllerType = (req: Request, res: Response) => Promise<void>;

export const getAllProducts: ControllerType = async (req, res) => {
  const products = await productService.getAllProducts();
  res.send({
    message: "All Product",
    products,
  });
};

export const createProduct: ControllerType = async (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    res.status(400).send({
      message: "title, description, price is required",
    });
    return;
  }

  const newProduct = await productService.createProduct(
    title,
    description,
    price
  );

  res.send({
    messaga: "Product Created",
    product: newProduct,
  });
};

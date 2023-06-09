import dbService from "./db.service";
import { Product } from "./types";

type GetAllProduct = () => Promise<Product[]>;
type CreateProduct = (
  title: string,
  description: string,
  price: number
) => Promise<Product>;

const getAllProducts: GetAllProduct = async () => {
  const products = await dbService.getData("/products");
  return products;
};

const createProduct: CreateProduct = async (title, description, price) => {
  const id = (await dbService.getData("/id")) as number;
  const newId = id + 1;
  await dbService.push("/id", newId);
  const newProduct: Product = {
    id: newId,
    title,
    description,
    price,
  };
  await dbService.push("/products[]", newProduct);
  return newProduct;
};

export default {
  getAllProducts,
  createProduct,
};

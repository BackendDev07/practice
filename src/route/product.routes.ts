import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controller/product.controller";

const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);

export default router;

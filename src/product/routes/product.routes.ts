import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getProductById,
  getProducts,
  updateProducts,
} from "../controllers/product.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProducts);
router.put("/products/:id", updateProducts);
router.delete("/products/:id", deleteProducts);

export default router;

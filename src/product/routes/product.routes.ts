import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getProductById,
  getProducts,
  productActiveStatus,
  updateProducts,
} from "../controllers/product.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProducts);
router.put("/products/:id", updateProducts);
router.put("/products/:id", productActiveStatus);
router.delete("/products/:id", deleteProducts);

export default router;

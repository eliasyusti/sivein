import { Router } from "express";
import {
  createSales,
  deleteSales,
  getSaleById,
  getSales,
  updateSales,
} from "../controllers/sales.controller";

const router = Router();

router.get("/sales", getSales);
router.get("/sales/:id", getSaleById);
router.post("/sales", createSales);
router.put("/sales/:id", updateSales);
router.delete("/sales/:id", deleteSales);

export default router;

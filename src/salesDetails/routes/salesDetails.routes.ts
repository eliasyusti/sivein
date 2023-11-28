import { Router } from "express";
import {
  createSalesDetailsController,
  getSalesDetailsController,
} from "../controllers/salesDetails.controller";

const router = Router();

// router.get("/sales", getSaled);
router.get("/salesDetails/:id", getSalesDetailsController);
router.post("/salesDetails", createSalesDetailsController);
// router.put("/sales/:id", updateSales);
// router.delete("/sales/:id", deleteSales);

export default router;

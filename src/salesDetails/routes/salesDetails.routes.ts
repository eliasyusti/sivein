import { Router } from "express";
import {
  createSalesDetailsController,
  deleteSaleDetail,
  getAllSalesDetailsController,
  getSalesDetailsController,
} from "../controllers/salesDetails.controller";

const router = Router();

router.get("/salesDetails", getAllSalesDetailsController);
router.get("/salesDetails/:id", getSalesDetailsController);
router.post("/salesDetails", createSalesDetailsController);
// router.put("/sales/:id", updateSales);
router.delete("/salesDetails/:id", deleteSaleDetail);

export default router;

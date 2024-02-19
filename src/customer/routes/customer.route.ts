import { Router } from "express";
import {
  createCustomers,
  deleteCustomers,
  getCustomerById,
  getCustomers,
  updateCustomers,
} from "../controllers/customer.controller";

const router = Router();

router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomerById);
router.post("/customers", createCustomers);
router.put("/customers/:id", updateCustomers);
router.delete("/customers/:id", deleteCustomers);

export default router;

import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  getCategoryByIdController,
  updateCategoryController,
} from "../controllers/category.controller";

const router = Router();

router.get("/category", getCategoriesController);
router.get("/category/:id", getCategoryByIdController);
router.post("/category", createCategoryController);
router.put("/category/:id", updateCategoryController);
router.delete("/category/:id", deleteCategoryController);

export default router;

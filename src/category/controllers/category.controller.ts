import { Request, Response } from "express";
import { httpResponse } from "../../shared/response/response";
import {
  createCategory,
  deleteCategory,
  findAllCategories,
  findCategoryById,
  updateCategory,
} from "../services/category.service";

const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const data = await findAllCategories();
    if (data.length === 0) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    return httpResponse.error(res, e);
  }
};

const getCategoryByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const intId = parseInt(id, 10);
  try {
    const data = await findCategoryById(intId);
    if (!data) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const createCategoryController = async (req: Request, res: Response) => {
  const category = req.body;
  try {
    if (category.name === "") {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await createCategory(category);
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const updateCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const intId = parseInt(id, 10);
  const category = req.body;
  try {
    const data = await updateCategory(intId, category);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en actualizar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const deleteCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const intId = parseInt(id, 10);
  try {
    const data = await deleteCategory(intId);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en eliminar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

export {
  getCategoriesController,
  getCategoryByIdController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
};

import { DeleteResult, UpdateResult } from "typeorm";
import { createBaseService } from "../../config/base.service";
import { Category } from "../entities/category.entity";
import { CategoryDTO } from "../dto/category.dto";

export const CategoryService = createBaseService(Category);

async function findAllCategories(): Promise<Category[]> {
  return (await CategoryService).find();
}

async function findCategoryById(id: string): Promise<Category | null> {
  return (await CategoryService).findOneBy({ id });
}

async function createCategory(body: CategoryDTO): Promise<Category> {
  return (await CategoryService).save(body);
}

async function deleteCategory(id: string): Promise<DeleteResult> {
  return (await CategoryService).delete({ id });
}

async function updateCategory(
  id: string,
  infoUpdate: CategoryDTO
): Promise<UpdateResult> {
  return (await CategoryService).update(id, infoUpdate);
}

export {
  findAllCategories,
  findCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
};

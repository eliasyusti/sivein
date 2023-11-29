import { DeleteResult, UpdateResult } from "typeorm";
import { createBaseService } from "../../config/base.service";
import { ProductDTO } from "../dto/product.dto";
import { Product } from "../entities/product.entity";

export const ProductService = createBaseService(Product);

async function findAllProducts(activeOnly: boolean = true): Promise<Product[]> {
  const conditions: Record<string, any> = {};

  if (activeOnly) {
    conditions.active = true;
  }

  return (await ProductService).find({
    relations: ["category"],
    where: conditions,
  });
}

async function findProductById(id: number): Promise<Product | null> {
  return (await ProductService).findOneBy({ id });
}

async function createProduct(body: ProductDTO): Promise<Product> {
  return (await ProductService).save(body);
}

async function deleteProduct(id: number): Promise<DeleteResult> {
  return (await ProductService).delete({ id });
}

async function updateProduct(
  id: number,
  infoUpdate: ProductDTO
): Promise<UpdateResult> {
  return (await ProductService).update(id, infoUpdate);
}

async function desactiveProduct(
  id: number,
  active: boolean
): Promise<UpdateResult> {
  return (await ProductService).update(id, { active });
}

export {
  findAllProducts,
  findProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  desactiveProduct,
};

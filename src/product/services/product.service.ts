import { DeleteResult, UpdateResult } from "typeorm";
import { createBaseService } from "../../config/base.service";
import { ProductDTO } from "../dto/product.dto";
import { Product } from "../entities/product.entity";

export const ProductService = createBaseService(Product);

async function findAllProducts(): Promise<Product[]> {
  return (await ProductService).find({ relations: ["category"] });
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

export {
  findAllProducts,
  findProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};

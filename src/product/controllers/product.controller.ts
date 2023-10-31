import { Request, Response } from "express";
import {
  ProductService,
  createProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  updateProduct,
} from "../services/product.service";


async function getProducts(req: Request, res: Response) {
  try {
    await ProductService;
    const data = await findAllProducts();
    console.log(data)
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
  }
}

async function getProductById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await ProductService;
    const data = await findProductById(id);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(404).json({ error: `Product with ID ${id} not found` });
  }
}

async function createProducts(req: Request, res: Response) {
  const product = req.body;
  try {
    await ProductService;
    const data = await createProduct(product);
    res.status(201).json(data);
  } catch (e) {
    console.error(e);
  }
}

async function updateProducts(req: Request, res: Response) {
  const { id } = req.params;
  const product = req.body;
  try {
    await ProductService;
    const data = await updateProduct(id, product);
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
  }
}

async function deleteProducts(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await ProductService;
    const data = await deleteProduct(id);
    res.status(204).send(data);
  } catch (e) {
    console.error(e);
    res.status(404).json({ error: `Product with ID ${id} not found` });
  }
}

export {
  getProducts,
  getProductById,
  createProducts,
  updateProducts,
  deleteProducts,
};

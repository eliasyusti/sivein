import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
  updateProduct,
} from "../services/product.service";
import { httpResponse } from "../../shared/response/response";

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await findAllProducts();
    if (data.length === 0) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    return httpResponse.error(res, e);
  }
};

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await findProductById(id);
    if (!data) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const createProducts = async (req: Request, res: Response) => {
  const product = req.body;
  try {
    if (
      product.name === "" ||
      product.description === "" ||
      product.price === "" ||
      product.category === ""
    ) {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await createProduct(product);
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const updateProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;
  try {
    const data = await updateProduct(id, product);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en actualizar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const deleteProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await deleteProduct(id);
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
  getProducts,
  getProductById,
  createProducts,
  updateProducts,
  deleteProducts,
};

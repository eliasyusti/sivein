import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  desactiveProduct,
  findAllProducts,
  findProductById,
  updateProduct,
} from "../services/product.service";
import { httpResponse } from "../../shared/response/response";

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await findAllProducts(true);
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
  const idInt = parseInt(id, 10);
  try {
    const data = await findProductById(idInt);
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
      product.stock === "" ||
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
  const idInt = parseInt(id, 10);
  const product = req.body;
  try {
    if (
      product.name === "" ||
      product.description === "" ||
      product.price === "" ||
      product.stock === "" ||
      product.category === ""
    ) {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await updateProduct(idInt, product);
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
  const idInt = parseInt(id, 10);
  try {
    const data = await deleteProduct(idInt);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en eliminar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const productActiveStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idInt = parseInt(id, 10);
  try {
    const product = await findProductById(idInt);
    if (!product) {
      return httpResponse.notFound(res, "El producto no existe");
    }
    const updatedProduct = await desactiveProduct(idInt, !product.active);

    if (!updatedProduct.affected) {
      return httpResponse.notFound(
        res,
        "Hubo un error al actualizar el estado activo del producto"
      );
    }
    return httpResponse.ok(res, updatedProduct);
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
  productActiveStatus,
};

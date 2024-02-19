import { Request, Response } from "express";
import { httpResponse } from "../../shared/response/response";
import {
  createSale,
  deleteSale,
  findAllSales,
  findSaleById,
  updateSale,
} from "../services/sales.service";

const getSales = async (req: Request, res: Response) => {
  try {
    const data = await findAllSales();
    if (data.length === 0) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    return httpResponse.error(res, e);
  }
};

const getSaleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idInt = parseInt(id, 10);
  try {
    const data = await findSaleById(idInt);
    if (!data) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const createSales = async (req: Request, res: Response) => {
  const Sale = req.body;
  try {
    if (Sale.paymentMethod === "") {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await createSale(Sale);
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const updateSales = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idInt = parseInt(id, 10);
  const Sale = req.body;
  try {
    if (Sale.paymentMethod === "") {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await updateSale(idInt, Sale);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en actualizar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const deleteSales = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idInt = parseInt(id, 10);
  try {
    const data = await deleteSale(idInt);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en eliminar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

export { getSales, getSaleById, createSales, updateSales, deleteSales };

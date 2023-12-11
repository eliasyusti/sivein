import { Request, Response } from "express";
import { httpResponse } from "../../shared/response/response";
import {
  createSalesDetailsService,
  deleteSaleDetailService,
  getDetailsAndTotalForSale,
} from "../services/salesDetails.service";

export const createSalesDetailsController = async (
  req: Request,
  res: Response
) => {
  const SaleDetails = req.body;
  try {
    if (SaleDetails.quantity === "") {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await createSalesDetailsService(SaleDetails);
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

export const getSalesDetailsController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    if (!id) {
      return httpResponse.notFound(res, "Falta el id de la venta");
    }
    const parsedSalesId = parseInt(id, 10);
    if (isNaN(parsedSalesId)) {
      return httpResponse.notFound(res, "El id de la venta no es válido");
    }
    const { details, totalToPay } = await getDetailsAndTotalForSale(
      parsedSalesId
    );

    return httpResponse.ok(res, { details, totalToPay });
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

export const deleteSaleDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idInt = parseInt(id, 10);
  try {
    const data = await deleteSaleDetailService(idInt);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en eliminar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

import { DeleteResult, UpdateResult } from "typeorm";
import { createBaseService } from "../../config/base.service";
import { SalesDetailsDTO } from "../dto/salesDetails.dto";
import { findProductById } from "../../product/services/product.service";
import { findAllSales } from "../../sales/services/sales.service";
import { SalesDetails } from "../entities/salesDetails.entity";
//import { SalesDTO } from "../../sales/dto/sales.dto";

const DetailsSalesService = createBaseService(SalesDetails);

const calculateSum = (numbers: number[]): number => {
  return numbers.reduce((total, number) => total + number, 0);
};

export const createSalesDetailsService = async (
  body: SalesDetailsDTO
): Promise<SalesDetails> => {
  const newDetail = (await DetailsSalesService).create(body);
  const product = await findProductById(newDetail.product.id);
  newDetail.subTotal = product!.price * newDetail.quantity;
  const existingDetails = await (
    await DetailsSalesService
  ).find({
    where: { sales: { id: newDetail.sales.id } },
  });
  console.log(existingDetails);
  const subTotals = existingDetails.map((detail) => detail.subTotal);
  subTotals.push(newDetail.subTotal);
  newDetail.totalToPay = calculateSum(subTotals);

  return (await DetailsSalesService).save(newDetail);
};

export const getDetailsAndTotalForSale = async (
  salesId: number
): Promise<{ details: SalesDetails[]; totalToPay: number }> => {
  const details = await (
    await DetailsSalesService
  ).find({
    where: { sales: { id: salesId } },
    relations: ["product", "sales"],
  });
  const totalToPay = calculateSum(details.map((detail) => detail.subTotal));

  return { details, totalToPay };
};

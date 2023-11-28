import { DeleteResult, UpdateResult } from "typeorm";
import { createBaseService } from "../../config/base.service";
import { Sales } from "../entities/sales.entity";
import { SalesDTO } from "../dto/sales.dto";

export const SalesService = createBaseService(Sales);

async function findAllSales(): Promise<Sales[]> {
  return (await SalesService).find({ relations: ["customer"] });
}

async function findSaleById(id: number): Promise<Sales | null> {
  return (await SalesService).findOneBy({ id });
}

async function createSale(body: SalesDTO): Promise<Sales> {
  return (await SalesService).save(body);
}

async function deleteSale(id: number): Promise<DeleteResult> {
  return (await SalesService).delete({ id });
}

async function updateSale(
  id: number,
  infoUpdate: SalesDTO
): Promise<UpdateResult> {
  return (await SalesService).update(id, infoUpdate);
}

export { findAllSales, findSaleById, createSale, deleteSale, updateSale };

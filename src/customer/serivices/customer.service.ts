import { DeleteResult, UpdateResult } from "typeorm";
import { createBaseService } from "../../config/base.service";
import { CustomerDTO } from "../dto/customer.dto";
import { Customer } from "../entities/customer.entity";

export const CustomerService = createBaseService(Customer);

async function findAllCustomers(): Promise<Customer[]> {
  return (await CustomerService).find();
}

async function findCustomerById(id: number): Promise<Customer | null> {
  return (await CustomerService).findOneBy({ id });
}

async function createCustomer(body: CustomerDTO): Promise<Customer> {
  return (await CustomerService).save(body);
}

async function deleteCustomer(id: number): Promise<DeleteResult> {
  return (await CustomerService).delete({ id });
}

async function updateCustomer(
  id: number,
  infoUpdate: CustomerDTO
): Promise<UpdateResult> {
  return (await CustomerService).update(id, infoUpdate);
}

export {
  findAllCustomers,
  findCustomerById,
  createCustomer,
  deleteCustomer,
  updateCustomer,
};

import { Request, Response } from "express";
import { httpResponse } from "../../shared/response/response";
import {
  createCustomer,
  deleteCustomer,
  findAllCustomers,
  findCustomerById,
  updateCustomer,
} from "../serivices/customer.service";

const getCustomers = async (req: Request, res: Response) => {
  try {
    const data = await findAllCustomers();
    if (data.length === 0) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    return httpResponse.error(res, e);
  }
};

const getCustomerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const intId = parseInt(id);
  try {
    const data = await findCustomerById(intId);
    if (!data) {
      return httpResponse.notFound(res, "No existe dato");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const createCustomers = async (req: Request, res: Response) => {
  const Customer = req.body;
  try {
    if (Customer.name === "") {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await createCustomer(Customer);
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const updateCustomers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const intId = parseInt(id);
  const Customer = req.body;
  try {
    if (Customer.name === "") {
      return httpResponse.notFound(res, "Hay un campo vacio");
    }
    const data = await updateCustomer(intId, Customer);
    if (!data.affected) {
      return httpResponse.notFound(res, "Hay un error en actualizar");
    }
    return httpResponse.ok(res, data);
  } catch (e) {
    console.error(e);
    return httpResponse.error(res, e);
  }
};

const deleteCustomers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const intId = parseInt(id);
  try {
    const data = await deleteCustomer(intId);
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
  getCustomers,
  getCustomerById,
  createCustomers,
  updateCustomers,
  deleteCustomers,
};

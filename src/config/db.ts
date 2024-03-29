import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Product } from "../product/entities/product.entity";
import { Category } from "../category/entities/category.entity";
import { Customer } from "../customer/entities/customer.entity";
import { Sales } from "../sales/entities/sales.entity";
import { SalesDetails } from "../salesDetails/entities/salesDetails.entity";

dotenv.config({
  path:
    process.env.NODE_ENV !== undefined
      ? `.${process.env.NODE_ENV.trim()}.env`
      : ".env",
});

const Config: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Product, Category, Customer, Sales, SalesDetails],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export const PORT = process.env.PORT;
export const AppDataSource: DataSource = new DataSource(Config);

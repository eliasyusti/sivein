import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  username: 'root',
  password: 'elias1234',
  database: 'sivein_db',
  port: 5432,
  entities: []
});

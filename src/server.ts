import "reflect-metadata";
import app from "./config/app";
import { AppDataSource } from "./config/db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
    app.listen(8000);
    console.log("Server is listening on port", 8000);
  } catch (error) {
    console.error(error);
  }

}

main();

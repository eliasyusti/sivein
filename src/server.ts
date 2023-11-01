import "reflect-metadata";
import app from "./config/app";
import { AppDataSource, PORT } from "./config/db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
    app.listen(PORT);
    console.log("Server is listening on port", PORT);
  } catch (error) {
    console.error(error);
  }
}

main();

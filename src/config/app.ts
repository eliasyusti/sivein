import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRoutes from "../product/routes/product.routes";
import categoryRoutes from "../category/routes/category.route";
import customerRoutes from "../customer/routes/customer.route";
import salesRoutes from "../sales/routes/sales.routes";
import salesDetailsRoutes from "../salesDetails/routes/salesDetails.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoryRoutes);
app.use("/api", customerRoutes);
app.use("/api", salesRoutes);
app.use("/api", salesDetailsRoutes);

export default app;

import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Sales } from "../../sales/entities/sales.entity";
import { BaseEntity } from "../../config/base.entity";
import { Product } from "../../product/entities/product.entity";

@Entity()
export class SalesDetails extends BaseEntity {
  @ManyToOne(() => Sales, (sales) => sales.salesDetails)
  @JoinColumn({ name: "sales_id" })
  sales: Sales;

  @ManyToOne(() => Product, (product) => product.salesDetails)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column()
  quantity: number;

  @Column()
  subTotal: number;

  @Column()
  totalToPay: number;
}

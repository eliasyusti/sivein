import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { Category } from "../../category/entities/category.entity";
import { SalesDetails } from "../../salesDetails/entities/salesDetails.entity";

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(() => SalesDetails, (salesDetails) => salesDetails.product)
  salesDetails: SalesDetails[];
}

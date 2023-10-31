import {Entity, Column} from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity()
export class Product extends BaseEntity {

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column()
  category: string;
}

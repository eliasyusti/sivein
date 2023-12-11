import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Customer } from "../../customer/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { SalesDetails } from "../../salesDetails/entities/salesDetails.entity";

@Entity()
export class Sales extends BaseEntity {
  @ManyToOne(() => Customer, (customer) => customer.sales)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @OneToMany(() => SalesDetails, (salesDetails) => salesDetails.sales)
  salesDetails: SalesDetails[];

  @Column({ default: "efectivo" })
  paimentMethod: string;
}

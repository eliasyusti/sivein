import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity()
export class Customer extends BaseEntity {
  @Column()
  rut: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  numberPhone: number;
}

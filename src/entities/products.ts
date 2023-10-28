import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column()
  category: string;

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}

import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { Category } from "../../category/entities/category.entity";

export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  stock: number;

  @IsNotEmpty()
  active: boolean;

  @IsNotEmpty()
  category: Category;
}

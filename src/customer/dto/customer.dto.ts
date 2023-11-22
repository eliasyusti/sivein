import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class CustomerDTO extends BaseDTO {
  @IsNotEmpty()
  rut: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  numberPhone: number;
}

import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class SalesDetailsDTO extends BaseDTO {
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  subTotal: number;

  @IsNotEmpty()
  totalToPay: number;
}

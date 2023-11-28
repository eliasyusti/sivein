import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class SalesDTO extends BaseDTO {
  @IsNotEmpty()
  paimentMethod: string;
}

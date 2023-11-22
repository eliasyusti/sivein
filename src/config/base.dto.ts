import { IsDate, IsOptional, IsInt } from "class-validator";

export class BaseDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}

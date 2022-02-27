import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBillDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  participants: string[];

  @IsNotEmpty()
  tripId: string;
}

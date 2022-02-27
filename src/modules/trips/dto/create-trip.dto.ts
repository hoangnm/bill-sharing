import { IsNotEmpty } from 'class-validator';
export class CreateTripDto {
  @IsNotEmpty()
  description: string;
}

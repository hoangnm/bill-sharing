export class CreateBillDto {
  description: string;
  amount: number;
  participants: string[];
  tripId: string;
}

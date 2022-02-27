export class CreateBillDto {
  description: string;
  amount: number;
  paidBy: string;
  participants: string[];
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { Bill } from './schemas/bill.schema';

@Controller('bills')
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get('/own')
  async findOwnBills(): Promise<Bill[]> {
    const userId = 'b3daa77b4c04a9551b8781d0';
    return this.billsService.findOwnBills(userId);
  }

  @Get('/debts')
  async findDebtBills(): Promise<Bill[]> {
    const userId = 'a1881c06eec96db9901c7bbf';
    return this.billsService.findDebtBills(userId);
  }

  @Post('/debts/:id/pay')
  async payDebtBill(@Param('id') debtId: string): Promise<Bill> {
    const userId = 'a1881c06eec96db9901c7bbf';
    return this.billsService.payDebtBill(userId, debtId);
  }

  @Post()
  async create(@Body() createBillDto: CreateBillDto) {
    const userId = 'b3daa77b4c04a9551b8781d0';
    return this.billsService.createBill(userId, createBillDto);
  }
}

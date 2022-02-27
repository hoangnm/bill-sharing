import { Controller, Get, Post, Body } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';

@Controller('bills')
export class BillsController {
  constructor(private billsService: BillsService) {}

  @Get()
  async findAll(): Promise<string[]> {
    return [];
  }

  @Post()
  async create(@Body() createBillDto: CreateBillDto) {
    return this.billsService.create(createBillDto);
  }
}

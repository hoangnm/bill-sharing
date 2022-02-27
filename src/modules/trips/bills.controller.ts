import { Controller, Get, Post, Body } from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { Trip } from './schemas/trip.schema';

@Controller('bills')
export class BillsController {
  constructor(private tripsService: TripsService) {}

  @Post()
  async createBill(@Body() createBillDto: CreateBillDto): Promise<boolean> {
    const userId = 'b3daa77b4c04a9551b8781d0';
    return this.tripsService.createBill(userId, createBillDto);
  }

  @Get('own')
  async findOwnBills(): Promise<Trip[]> {
    const userId = 'b3daa77b4c04a9551b8781d0';
    return this.tripsService.findOwnBills(userId);
  }
}

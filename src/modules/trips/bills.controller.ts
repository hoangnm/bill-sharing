import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { TripsService } from './trips.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { Trip } from './schemas/trip.schema';

@ApiTags('bills')
@ApiHeader({
  name: 'userid',
  description: 'user id is used as an access token',
})
@Controller('bills')
export class BillsController {
  constructor(private tripsService: TripsService) {}

  @Post()
  async createBill(
    @Headers() headers,
    @Body() createBillDto: CreateBillDto,
  ): Promise<boolean> {
    return this.tripsService.createBill(headers.userid, createBillDto);
  }

  @Get('own')
  async findOwnBills(@Headers() headers): Promise<Trip[]> {
    return this.tripsService.findOwnBills(headers.userid);
  }
}

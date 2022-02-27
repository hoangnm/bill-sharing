import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) {}

  @Post()
  async createTrip(@Body() createTripDto: CreateTripDto) {
    return this.tripsService.createTrip(createTripDto);
  }
}

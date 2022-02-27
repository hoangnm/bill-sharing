import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { Trip } from './schemas/trip.schema';

@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) {}

  @Get()
  async findTrips(): Promise<Trip[]> {
    const userId = 'b3daa77b4c04a9551b8781d0';
    return this.tripsService.findTrips(userId);
  }

  @Post()
  async createTrip(@Body() createTripDto: CreateTripDto) {
    return this.tripsService.createTrip(createTripDto);
  }
}
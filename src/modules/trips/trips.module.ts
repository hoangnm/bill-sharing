import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TripsController } from './trips.controller';
import { BillsController } from './bills.controller';
import { TripsService } from './trips.service';
import { Trip, TripSchema } from './schemas/trip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trip.name, schema: TripSchema }]),
  ],
  controllers: [TripsController, BillsController],
  providers: [TripsService],
})
export class TripsModule {}

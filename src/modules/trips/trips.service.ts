import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Trip, TripDocument } from './schemas/trip.schema';
import { CreateTripDto } from './dto/create-trip.dto';
import { CreateBillDto } from './dto/create-bill.dto';

@Injectable()
export class TripsService {
  constructor(@InjectModel(Trip.name) private tripModel: Model<TripDocument>) {}

  async createTrip(createTripDto: CreateTripDto): Promise<Trip> {
    const createdTrip = new this.tripModel(createTripDto);
    return createdTrip.save();
  }

  async createBill(
    userId: string,
    createBillDto: CreateBillDto,
  ): Promise<boolean> {
    const trip = await this.tripModel.findById(createBillDto.tripId);
    const bill = {
      ...createBillDto,
      participants: [],
      owner: userId,
      tripId: undefined,
    };
    bill.participants = createBillDto.participants.map((participant) => ({
      userId: participant,
      paid: false,
    }));
    trip.bills.push(bill);
    await trip.save();
    return true;
  }

  async findOwnBills(userId: string): Promise<Trip[]> {
    const trips = await this.tripModel.find({
      'bills.owner': userId,
    });
    trips.forEach((trip) => {
      trip.bills = trip.bills.filter((bill) => bill.owner === userId);
    });
    return trips;
  }
}

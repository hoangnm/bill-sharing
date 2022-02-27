import { Test, TestingModule } from '@nestjs/testing';
import { Model, Query } from 'mongoose';
import { createMock } from '@golevelup/ts-jest';
import { getModelToken } from '@nestjs/mongoose';
import { TripsService } from './trips.service';
import { TripDocument } from './schemas/trip.schema';

describe('TripsService', () => {
  let service: TripsService;
  let tripModel: Model<TripDocument>;
  const mockTrip = () => {
    class TripData {
      _id = 'trip 1';
      description = 'trip 1';
      bills = [
        {
          _id: 'bill1',
          participants: [
            {
              userId: 'user2',
              paid: false,
            },
          ],
          owner: 'user1',
          description: 'bill for the trip 1',
          amount: 1000,
        },
      ];
      save = jest.fn();
    }
    return new TripData();
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripsService,
        {
          provide: getModelToken('Trip'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockTrip()),
            constructor: jest.fn().mockResolvedValue(mockTrip()),
            find: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn().mockResolvedValue(mockTrip()),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TripsService>(TripsService);
    tripModel = module.get<Model<TripDocument>>(getModelToken('Trip'));
  });

  it('should create bill successfully', async () => {
    const tripData = mockTrip();
    jest.spyOn(tripModel, 'findById').mockReturnValueOnce(
      createMock<Query<TripDocument, TripDocument>>({
        exec: jest.fn().mockResolvedValueOnce(tripData),
        ...tripData,
      }) as any,
    );
    jest.spyOn(tripData, 'save');
    const userId = '1';
    const billDto = {
      description: 'test1',
      amount: 1000,
      participants: ['1'],
      tripId: '1',
    };
    const res = await service.createBill(userId, billDto);
    expect(res).toBe(true);
    expect(tripData.save).toBeCalled();
    expect(tripData.bills).toHaveLength(2);
    expect(tripData.bills[1].participants).toEqual([
      {
        userId: billDto.participants[0],
        paid: false,
      },
    ]);
  });
});

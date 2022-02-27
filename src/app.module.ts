import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TripsModule } from './modules/trips/trips.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/bill-sharing?authSource=admin',
      {
        auth: {
          username: 'hoangnm',
          password: '123456',
        },
        autoCreate: true,
      },
    ),
    TripsModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TripsModule } from './modules/trips/trips.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: `mongodb://localhost/${config.get('DB_NAME')}?authSource=admin`,
        auth: {
          username: config.get('DB_USER'),
          password: config.get('DB_PASS'),
        },
        autoCreate: true,
      }),
    }),
    ConfigModule.forRoot(),
    TripsModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BillsModule } from './modules/bills/bills.module';
import { UsersModule } from './modules/users/users.module';

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
    BillsModule,
    UsersModule,
  ],
})
export class AppModule {}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Bill, BillDocument } from './schemas/bill.schema';
import { CreateBillDto } from './dto/create-bill.dto';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async createBill(createBillDto: CreateBillDto): Promise<Bill> {
    const createdBill = new this.billModel(createBillDto);
    return createdBill.save();
  }

  async findOwnBills(userId: string): Promise<Bill[]> {
    const bills = this.billModel.find({ owner: userId });
    return bills;
  }

  async findDebtBills(userId: string): Promise<Bill[]> {
    const bills = this.billModel.find({ 'participants.userId': userId });
    return bills;
  }
}

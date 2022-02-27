import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Bill, BillDocument } from './schemas/bill.schema';
import { CreateBillDto } from './dto/create-bill.dto';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async createBill(
    ownerId: string,
    createBillDto: CreateBillDto,
  ): Promise<Bill> {
    const bill: Bill = { ...createBillDto, participants: [], owner: ownerId };
    bill.participants = createBillDto.participants.map((participant) => ({
      userId: participant,
      paid: false,
    }));
    const createdBill = new this.billModel(bill);
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

  async payDebtBill(userId: string, debtId: string): Promise<Bill> {
    const bill = await this.billModel.findOne({ _id: debtId });
    for (const participant of bill.participants) {
      if (participant.userId === userId) {
        participant.paid = true;
        break;
      }
    }
    await bill.save();
    return bill;
  }
}

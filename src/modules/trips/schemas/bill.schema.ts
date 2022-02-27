import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillDocument = Bill & Document;

export class Participant {
  userId: string;
  paid: boolean;
}

@Schema()
export class Bill {
  @Prop()
  description: string;

  @Prop()
  amount: number;

  @Prop()
  participants: Participant[];

  @Prop()
  owner: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);

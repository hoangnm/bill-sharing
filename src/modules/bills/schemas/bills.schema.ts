import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillDocument = Bill & Document;

@Schema()
export class Bill {
  @Prop()
  description: string;

  @Prop()
  amount: number;
}

export const BillSchema = SchemaFactory.createForClass(Bill);

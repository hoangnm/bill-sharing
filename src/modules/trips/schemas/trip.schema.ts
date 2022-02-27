import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Bill, BillSchema } from './bill.schema';

export type TripDocument = Trip & Document;

@Schema()
export class Trip {
  @Prop()
  description: string;
  @Prop({ type: [{ type: BillSchema, ref: Bill.name }] })
  bills: Bill[];
}

export const TripSchema = SchemaFactory.createForClass(Trip);

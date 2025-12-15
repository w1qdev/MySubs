import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubscriptionDocument = Subscription & Document;

@Schema({ timestamps: true })
export class Subscription {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  expiryDate: Date;

  @Prop({ required: true })
  plan: string;
}

export const SubscriptionsSchema = SchemaFactory.createForClass(Subscription);

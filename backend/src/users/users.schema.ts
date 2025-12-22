import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export type UserRoles = {
  role: 'user' | 'admin';
};

@Schema({ timestamps: true })
export class User {
  // @Prop({ required: true, default: 'profileName' })
  // name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, default: 'user', select: false })
  role: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: '', select: false })
  phone?: string;

  @Prop({ default: '' })
  avatarUrl?: string;

  @Prop({ required: true, default: false })
  isCreator: boolean;

  @Prop({ type: [], default: [] })
  telegramChannels: [];

  @Prop({ type: [], default: [] })
  discordChannels: [];

  @Prop({ required: false, default: 0 })
  totalEarnings?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

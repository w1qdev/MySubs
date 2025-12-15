import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsDate()
  expiryDate: Date;

  @IsNotEmpty()
  @IsString()
  plan: string;
}

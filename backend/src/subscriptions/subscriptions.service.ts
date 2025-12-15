import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription, SubscriptionDocument } from './subscriptions.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private subscriptionModel: Model<SubscriptionDocument>,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const createdSubscription = new this.subscriptionModel(
      createSubscriptionDto,
    );
    return await createdSubscription.save();
  }

  async findAll() {
    return await this.subscriptionModel.find().exec();
  }

  async findOne(id: number) {
    return await this.subscriptionModel.findById(id).exec();
  }

  async remove(id: number) {
    return await this.subscriptionModel.findByIdAndDelete(id).exec();
  }

  async update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return await this.subscriptionModel
      .findByIdAndUpdate(id, updateSubscriptionDto, { new: true })
      .exec();
  }
}

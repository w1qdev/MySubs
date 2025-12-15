import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PaymentsModule } from './payments/payments.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/mysubs'),
    UsersModule,
    ProductsModule,
    SubscriptionsModule,
    PaymentsModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

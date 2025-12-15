import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Создание одного пользователя
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(
          'Пользователь с таким email уже существует',
        );
      }
      throw error;
    }
  }

  // Создание нескольких пользователей
  async createMany(users: CreateUserDto[]): Promise<User[]> {
    return await this.userModel.insertMany(users);
  }

  // Получение всех пользователей
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  // Получение пользователя по ID
  async findOne(id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }
}

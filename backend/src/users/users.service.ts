import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { HashService } from 'src/hash/hash.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthorizeUserDto } from './dto/authorize-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly hashService: HashService,
  ) {}

  // Создание одного пользователя
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const hashedPassword = await this.hashService.hash(
        createUserDto.password,
      );

      const createUserData = {
        ...createUserDto,
        password: hashedPassword,
      };

      const createdUser = new this.userModel(createUserData);

      return await createdUser.save();
    } catch (error) {
      // Проверяем код ошибки MongoDB (11000 — дубликат ключа)
      if (error.code === 11000) {
        throw new ConflictException({
          statusCode: 409,
          message: 'Пользователь с таким email уже существует',
          error: 'Conflict',
        });
      }

      // Если ошибка другая, пробрасываем её дальше
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
  async findById(id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  // Получение пользователя по Email
  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }

  async authorizeUser(userData: AuthorizeUserDto): Promise<User | null> {
    const { email, password } = userData;

    const existsUser = await this.findByEmail(email);

    if (!existsUser) {
      throw new UnauthorizedException({
        message: 'Что-то пошло не так, попробуйте ввести другие данные',
        error: 'UserNotFound',
      });
    }

    const passwordCompare = await this.hashService.compareHash(
      password,
      existsUser.password,
    );

    if (!passwordCompare) {
      throw new UnauthorizedException({
        message: 'Что-то пошло не так, попробуйте ввести другие данные',
        error: 'InvalidPassword',
      });
    }

    return existsUser;
  }
}

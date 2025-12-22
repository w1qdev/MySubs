import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthorizeUserDto } from './dto/authorize-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post('auth')
  async authorize(@Body() authorizeUserDto: AuthorizeUserDto) {
    return await this.usersService.authorizeUser(authorizeUserDto);
  }

  @Post('bulk')
  async createMany(@Body() users: CreateUserDto[]) {
    return await this.usersService.createMany(users);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
}

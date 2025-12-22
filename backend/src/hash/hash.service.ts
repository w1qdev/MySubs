import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  private readonly SALT_ROUNDS = 10;

  async hash(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, this.SALT_ROUNDS);
    } catch (error: unknown) {
      // Логируем ошибку и выбрасываем стандартное исключение NestJS
      throw new InternalServerErrorException('Ошибка при хешировании данных');
    }
  }

  async compareHash(password: string, hash: string): Promise<boolean> {
    try {
      const isMatch = await bcrypt.compare(password, hash);
      return isMatch;
    } catch (error: unknown) {
      throw new InternalServerErrorException('Ошибка при проверке хэшей');
    }
  }
}

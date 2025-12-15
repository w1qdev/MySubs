import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSeriviceStatus(): string {
    return 'All is OK!';
  }
}

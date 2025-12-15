import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  serviceStatus(): string {
    return 'OK';
  }
}

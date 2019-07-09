import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloTo(name: string): string {
    return `Hello World! to ${name}`;
  }
}

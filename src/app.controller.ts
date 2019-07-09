import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':name')
  getHelloTo(@Param('name') name: string): string {
    return this.appService.getHelloTo(name);
  }
}

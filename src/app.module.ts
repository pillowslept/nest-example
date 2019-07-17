import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroController } from './controller/hero.controller';
import { AppService } from './app.service';
import { HeroService } from 'service/hero.service';
import { LoggerMiddleware } from 'middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HeroController);
  }
}

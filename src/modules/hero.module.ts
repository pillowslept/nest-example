import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HeroController } from 'controllers/hero.controller';
import { HeroService } from 'services/hero.service';
import { LoggerMiddleware } from 'middlewares/logger.middleware';

@Module({
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HeroController);
  }
}

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HeroController } from 'controllers/hero.controller';
import { HeroService } from 'services/hero.service';
import { LoggerMiddleware } from 'middlewares/logger.middleware';
import { RaceService } from 'services/race.service';

@Module({
  controllers: [HeroController],
  providers: [HeroService, RaceService],
})
export class HeroModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(HeroController);
  }
}

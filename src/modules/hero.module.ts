import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HeroController } from 'controllers';
import { HeroService, RaceService } from 'services';
import { LoggerMiddleware } from 'middlewares/logger.middleware';

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

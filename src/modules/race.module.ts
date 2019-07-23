import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RaceController } from 'controllers';
import { RaceService } from 'services';
import { LoggerMiddleware } from 'middlewares/logger.middleware';

@Module({
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(RaceController);
  }
}

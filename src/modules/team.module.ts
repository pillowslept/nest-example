import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TeamController } from 'controllers';
import { TeamService } from 'services';
import { LoggerMiddleware } from 'middlewares/logger.middleware';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(TeamController);
  }
}

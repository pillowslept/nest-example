import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { LoggerMiddleware } from 'shared/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamEntity } from './team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamEntity])],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamService],
})
export class TeamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(TeamController);
  }
}

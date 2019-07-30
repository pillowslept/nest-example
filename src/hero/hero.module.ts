import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { LoggerMiddleware } from 'shared/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroEntity } from './hero.entity';
import { RaceModule } from '../race/race.module';
import { TeamModule } from 'team/team.module';

@Module({
  imports: [TypeOrmModule.forFeature([HeroEntity]), RaceModule, TeamModule],
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

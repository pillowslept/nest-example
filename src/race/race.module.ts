import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RaceController } from './race.controller';
import { RaceService } from './race.service';
import { LoggerMiddleware } from 'shared/middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceEntity } from './race.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RaceEntity])],
  controllers: [RaceController],
  providers: [RaceService],
  exports: [RaceService],
})
export class RaceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(RaceController);
  }
}

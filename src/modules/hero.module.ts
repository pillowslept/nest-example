import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { HeroController } from 'controllers';
import { HeroService } from 'services';
import { LoggerMiddleware } from 'middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroEntity } from 'entities/hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeroEntity])],
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

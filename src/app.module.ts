import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'shared/interceptors/transform.interceptor';
import { RaceModule } from 'race/race.module';
import { TeamModule } from 'team/team.module';
import { HeroModule } from 'hero/hero.module';

@Module({
  imports: [TypeOrmModule.forRoot(), HeroModule, RaceModule, TeamModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule { }

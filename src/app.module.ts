import { Module } from '@nestjs/common';
import { HeroModule, RaceModule, TeamModule } from 'modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'interceptors/transform.interceptor';

@Module({
  imports: [HeroModule, RaceModule, TeamModule, TypeOrmModule.forRoot()],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule { }

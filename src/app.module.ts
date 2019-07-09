import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroController } from './controller/hero.controller';
import { AppService } from './app.service';
import { HeroService } from './service/hero.service';

@Module({
  imports: [],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { HeroModule } from 'modules/hero.module';
import { RaceModule } from 'modules/race.module';

@Module({
  imports: [HeroModule, RaceModule],
})
export class AppModule { }

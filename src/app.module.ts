import { Module } from '@nestjs/common';
import { HeroModule, RaceModule, TeamModule } from 'modules';

@Module({
  imports: [HeroModule, RaceModule, TeamModule],
})
export class AppModule { }

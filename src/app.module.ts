import { Module } from '@nestjs/common';
import { HeroModule } from 'modules/hero.module';

@Module({
  imports: [HeroModule],
})
export class AppModule { }

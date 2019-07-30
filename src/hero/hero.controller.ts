import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroDto } from './hero.dto';

@Controller('hero')
export class HeroController {

  constructor(
    private readonly heroService: HeroService,
  ) {}

  @Get()
  getAll() {
    return this.heroService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.heroService.getById(id);
  }

  @Get('/name/:name')
  getByName(@Param('name') name: string) {
    return this.heroService.getByName(name);
  }

  @Post()
  create(@Body() heroDto: HeroDto) {
    return this.heroService.create(heroDto);
  }

  @Put(':id/teams')
  relateTeam(@Param('id') id: number, @Body() heroDto: HeroDto) {
    return this.heroService.relateTeam(id, heroDto);
  }

}

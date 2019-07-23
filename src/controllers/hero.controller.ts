import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { HeroService } from 'services';
import { ResponseDto, HeroDto } from 'dto';

@Controller('hero')
export class HeroController {

  constructor(
    private readonly heroService: HeroService,
  ) {}

  @Get()
  getAll(): ResponseDto {
    return new ResponseDto(this.heroService.getAll());
  }

  @Get('/:name')
  getByName(@Param('name') name: string): ResponseDto {
    return new ResponseDto(this.heroService.getByName(name));
  }

  @Get('race/:race')
  getByRace(@Param('race') race: string): ResponseDto {
    return new ResponseDto(this.heroService.getByRace(race));
  }

  @Post()
  create(@Body() heroDto: HeroDto): ResponseDto {
    return new ResponseDto(this.heroService.create(heroDto));
  }

}

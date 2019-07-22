import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { HeroService } from 'services/hero.service';
import { ResponseDto } from 'dto/response.dto';
import { HeroDto } from 'dto';

@Controller('hero')
export class HeroController {

  constructor(
    private readonly heroService: HeroService,
  ) {}

  @Get()
  getAll(): ResponseDto {
    return {
      data: this.heroService.getAll(),
      success: true,
    };
  }

  @Get('/:name')
  getByName(@Param('name') name: string): ResponseDto {
    return {
      data: this.heroService.getByName(name),
      success: true,
    };
  }

  @Get('origin/:origin')
  getByOrigin(@Param('origin') origin: string): ResponseDto {
    return {
      data: this.heroService.getByOrigin(origin),
      success: true,
    };
  }

  @Post()
  create(@Body() heroDto: HeroDto): ResponseDto {
    return {
      data: this.heroService.create(heroDto),
      success: true,
    };
  }

}

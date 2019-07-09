import { Controller, Get, Param } from '@nestjs/common';
import { HeroService } from 'service/hero.service';
import { ResponseDto } from 'dto/response.dto';

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

  @Get('name/:name')
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

}

import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RaceService } from 'services/race.service';
import { ResponseDto } from 'dto/response.dto';
import { RaceDto } from 'dto';

@Controller('race')
export class RaceController {

  constructor(
    private readonly raceService: RaceService,
  ) {}

  @Get()
  getAll(): ResponseDto {
    return {
      data: this.raceService.getAll(),
      success: true,
    };
  }

  @Get('/:name')
  getByName(@Param('name') name: string): ResponseDto {
    return {
      data: this.raceService.getByName(name),
      success: true,
    };
  }

  @Post()
  create(@Body() raceDto: RaceDto): ResponseDto {
    return {
      data: this.raceService.create(raceDto),
      success: true,
    };
  }

}

import { Controller, Get, Post, Param, Body, Inject, forwardRef } from '@nestjs/common';
import { RaceService } from 'services';
import { ResponseDto, RaceDto } from 'dto';

@Controller('race')
export class RaceController {

  constructor(
    @Inject(forwardRef(() => RaceService))
    private readonly raceService: RaceService,
  ) {}

  @Get()
  getAll(): ResponseDto {
    return new ResponseDto(this.raceService.getAll());
  }

  @Get('/:name')
  getByName(@Param('name') name: string): ResponseDto {
    return new ResponseDto(this.raceService.getByName(name));
  }

  @Post()
  create(@Body() raceDto: RaceDto): ResponseDto {
    return new ResponseDto(this.raceService.create(raceDto));
  }

}

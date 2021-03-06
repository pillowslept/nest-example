import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RaceService } from './race.service';
import { RaceDto } from './race.dto';

@Controller('race')
export class RaceController {

  constructor(
    private readonly raceService: RaceService,
  ) {}

  @Get()
  getAll() {
    return this.raceService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.raceService.getById(id);
  }

  @Get('/name/:name')
  getByName(@Param('name') name: string) {
    return this.raceService.getByName(name);
  }

  @Post()
  create(@Body() raceDto: RaceDto) {
    return this.raceService.create(raceDto);
  }

}

import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './team.dto';

@Controller('team')
export class TeamController {

  constructor(
    private readonly teamService: TeamService,
  ) {}

  @Get()
  getAll() {
    return this.teamService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.teamService.getById(id);
  }

  @Get('/name/:name')
  getByName(@Param('name') name: string) {
    return this.teamService.getByName(name);
  }

  @Post()
  create(@Body() teamDto: TeamDto) {
    return this.teamService.create(teamDto);
  }

}

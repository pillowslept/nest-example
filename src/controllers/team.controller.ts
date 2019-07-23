import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TeamService } from 'services';
import { ResponseDto, TeamDto } from 'dto';

@Controller('team')
export class TeamController {

  constructor(
    private readonly teamService: TeamService,
  ) {}

  @Get()
  getAll(): ResponseDto {
    return new ResponseDto(this.teamService.getAll());
  }

  @Get('/:name')
  getByName(@Param('name') name: string): ResponseDto {
    return new ResponseDto(this.teamService.getByName(name));
  }

  @Post()
  create(@Body() teamDto: TeamDto): ResponseDto {
    return new ResponseDto(this.teamService.create(teamDto));
  }

}

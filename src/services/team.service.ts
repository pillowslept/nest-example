import { Injectable, NotFoundException } from '@nestjs/common';
import { Team } from 'interfaces';
import { TeamDto } from 'dto';
import { TEAMS } from 'utils/constants/base-heroes';
import { TEAM_DOEST_EXIST } from 'utils/constants/messages';

@Injectable()
export class TeamService {

  getAll(): Team[] {
    return TEAMS;
  }

  getByName(raceName: string): Team {
    return this.filterByName(raceName);
  }

  create(teamDto: TeamDto): Team {
    TEAMS.push({ name: teamDto.name });
    return this.filterByName(teamDto.name);
  }

  private filterByName(teamName: string) {
    const team =  TEAMS.find(({ name }) => name.toLowerCase() === teamName.toLowerCase());

    if (!team) {
      throw new NotFoundException(TEAM_DOEST_EXIST);
    }

    return team;
  }

}

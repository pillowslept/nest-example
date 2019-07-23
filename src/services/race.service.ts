import { Injectable, NotFoundException } from '@nestjs/common';
import { Race } from 'interfaces';
import { RaceDto } from 'dto';
import { RACES } from 'utils/constants/base-heroes';
import { RACE_DOEST_EXIST } from 'utils/constants/messages';

@Injectable()
export class RaceService {

  getAll(): Race[] {
    return RACES;
  }

  getByName(raceName: string): Race {
    return this.filterByName(raceName);
  }

  create(raceDto: RaceDto): Race {
    RACES.push({ name: raceDto.name, population: raceDto.population });
    return this.filterByName(raceDto.name);
  }

  private filterByName(raceName: string) {
    const race =  RACES.find(({ name }) => name.toLowerCase() === raceName.toLowerCase());

    if (!race) {
      throw new NotFoundException(RACE_DOEST_EXIST);
    }

    return race;
  }

}

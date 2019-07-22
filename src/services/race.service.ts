import { Injectable } from '@nestjs/common';
import { Race } from 'interfaces/race.interface';
import { RaceDto } from 'dto';

@Injectable()
export class RaceService {

  private RACES: Race[] = [
    { name: 'Human', population: 10000 },
    { name: 'Kree', population: 1500 },
    { name: 'Skrulls', population: 500 },
    { name: 'Chitauri', population: 5900 },
    { name: 'Asgardians', population: 1700 },
  ];

  getAll(): Race[] {
    return this.RACES;
  }

  getByName(raceName: string): Race {
    return this.filterByName(raceName);
  }

  create(raceDto: RaceDto): Race {
    this.RACES.push({ name: raceDto.name, population: raceDto.population });
    return this.filterByName(raceDto.name);
  }

  private filterByName(raceName: string) {
    return this.RACES.find(({ name }) => name.toLowerCase() === raceName.toLowerCase());
  }

}

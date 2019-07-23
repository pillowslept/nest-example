import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { Hero } from 'interfaces';
import { HeroDto } from 'dto';
import { HEROES } from 'utils/constants/base-heroes';
import { RaceService } from 'services';
import { HERO_DOEST_EXIST } from 'utils/constants/messages';

@Injectable()
export class HeroService {

  constructor(
    @Inject(forwardRef(() => RaceService))
    private raceService: RaceService,
  ) {
  }

  getAll(): Hero[] {
    return HEROES;
  }

  getByName(heroName: string): Hero {
    return this.filterByName(heroName);
  }

  getByRace(heroRace: string): Hero[] {
    return HEROES.filter(({ race: { name } }) => name.toLowerCase() === heroRace.toLowerCase());
  }

  create(heroDto: HeroDto): Hero {
    const race = this.raceService.getByName(heroDto.race);
    HEROES.push({ name: heroDto.name, race });
    return this.filterByName(heroDto.name);
  }

  private filterByName(heroName: string) {
    const hero = HEROES.find(({ name }) => name.toLowerCase() === heroName.toLowerCase());

    if (!hero) {
      throw new NotFoundException(HERO_DOEST_EXIST);
    }

    return hero;
  }

}

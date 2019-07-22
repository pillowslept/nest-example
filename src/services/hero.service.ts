import { Injectable } from '@nestjs/common';
import { Hero } from 'interfaces/hero.interface';
import { HeroDto } from 'dto';

@Injectable()
export class HeroService {

  private HEROES: Hero[] = [
    { name: 'Thor', origin: 'Asgard' },
    { name: 'Hulk', origin: 'Earth' },
    { name: 'Iron Man', origin: 'Earth' },
    { name: 'Black Widow', origin: 'Earth' },
    { name: 'Loki', origin: 'Asgard' },
  ];

  getAll(): Hero[] {
    return this.HEROES;
  }

  getByName(heroName: string): Hero {
    return this.filterByName(heroName);
  }

  getByOrigin(heroOrigin: string): Hero[] {
    return this.HEROES.filter(({ origin }) => origin.toLowerCase() === heroOrigin.toLowerCase());
  }

  create(heroDto: HeroDto): Hero {
    this.HEROES.push({ name: heroDto.name, origin: heroDto.origin });
    return this.filterByName(heroDto.name);
  }

  private filterByName(heroName: string) {
    return this.HEROES.find(({ name }) => name.toLowerCase() === heroName.toLowerCase());
  }

}
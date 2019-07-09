import { Injectable } from '@nestjs/common';
import { Hero } from 'interfaces/hero.interface';

@Injectable()
export class HeroService {

  private readonly HEROES: Hero[] = [
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
    return this.HEROES.find(({ name }) => name.toLowerCase() === heroName.toLowerCase());
  }

  getByOrigin(heroOrigin: string): Hero[] {
    return this.HEROES.filter(({ origin }) => origin.toLowerCase() === heroOrigin.toLowerCase());
  }

}

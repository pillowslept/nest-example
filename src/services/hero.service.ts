import { Injectable, NotFoundException } from '@nestjs/common';
import { HeroDto } from 'dto';
import { HERO_DOEST_EXIST } from 'utils/constants/messages';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroEntity } from 'entities/hero.entity';
import { RaceService } from './race.service';

@Injectable()
export class HeroService {

  constructor(
    @InjectRepository(HeroEntity)
    private heroRepository: Repository<HeroEntity>,
    private readonly raceService: RaceService,
  ) {
  }

  async getAll(): Promise<HeroEntity[]> {
    return await this.heroRepository.find();
  }

  async getById(id: number): Promise<HeroEntity> {
    const hero = await this.heroRepository.findOne({ where: { id }});
    return this.validateExistence(hero);
  }

  async getByName(name: string): Promise<HeroEntity> {
    const hero = await this.heroRepository.findOne({ where: { name }});
    return this.validateExistence(hero);
  }

  async create(heroDto: HeroDto): Promise<HeroEntity> {
    const hero = await this.heroRepository.create(heroDto);
    await this.heroRepository.save(hero);
    return hero;
  }

  private validateExistence(heroEntity: HeroEntity): HeroEntity {
    if (!heroEntity) {
      throw new NotFoundException(HERO_DOEST_EXIST);
    }

    return heroEntity;
  }

}

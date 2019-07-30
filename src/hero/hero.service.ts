import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HERO_DOEST_EXIST, TEAM_ALREADY_RELATED } from 'shared/constants/messages';
import { HeroDto } from './hero.dto';
import { HeroEntity } from './hero.entity';
import { RaceService } from '../race/race.service';
import { TeamService } from 'team/team.service';

@Injectable()
export class HeroService {

  private readonly RELATIONS = ['race', 'teams'];
  constructor(
    @InjectRepository(HeroEntity)
    private heroRepository: Repository<HeroEntity>,
    private readonly raceService: RaceService,
    private readonly teamService: TeamService,
  ) {
  }

  async getAll(): Promise<HeroEntity[]> {
    return await this.heroRepository.find({ relations: this.RELATIONS });
  }

  async getById(id: number): Promise<HeroEntity> {
    const hero = await this.heroRepository.findOne({ where: { id }, relations: this.RELATIONS });

    return this.validateExistence(hero);
  }

  async getByName(name: string): Promise<HeroEntity> {
    const hero = await this.heroRepository.findOne({ where: { name }, relations: this.RELATIONS });

    return this.validateExistence(hero);
  }

  async create(heroDto: HeroDto): Promise<HeroEntity> {
    const race = await this.raceService.getById(heroDto.raceId);
    const hero = await this.heroRepository.create({ ...heroDto, race });
    await this.heroRepository.save(hero);

    return hero;
  }

  async relateTeam(id: number, heroDto: HeroDto): Promise<HeroEntity> {
    const team = await this.teamService.getById(heroDto.teamId);
    const hero = await this.getById(id);

    if (hero.teams && !hero.teams.some(({ id: teamId }) => teamId === heroDto.teamId)) {
      hero.teams.push(team);
      await this.heroRepository.save(hero);
    } else {
      throw new BadRequestException(TEAM_ALREADY_RELATED);
    }

    return hero;
  }

  private validateExistence(heroEntity: HeroEntity): HeroEntity {
    if (!heroEntity) {
      throw new NotFoundException(HERO_DOEST_EXIST);
    }

    return heroEntity;
  }

}

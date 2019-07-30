import { Injectable, NotFoundException } from '@nestjs/common';
import { TeamDto } from './team.dto';
import { TEAM_DOEST_EXIST } from 'shared/constants/messages';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from './team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {

  constructor(
    @InjectRepository(TeamEntity)
    private teamRepository: Repository<TeamEntity>,
  ) {
  }

  async getAll(): Promise<TeamEntity[]> {
    return await this.teamRepository.find();
  }

  async getById(id: number): Promise<TeamEntity> {
    const team = await this.teamRepository.findOne({ where: { id }});

    return this.validateExistence(team);
  }

  async getByName(name: string): Promise<TeamEntity> {
    const team = await this.teamRepository.findOne({ where: { name }});

    return this.validateExistence(team);
  }

  async create(teamDto: TeamDto): Promise<TeamEntity> {
    const hero = await this.teamRepository.create(teamDto);
    await this.teamRepository.save(hero);
    return hero;
  }

  private validateExistence(teamEntity: TeamEntity): TeamEntity {
    if (!teamEntity) {
      throw new NotFoundException(TEAM_DOEST_EXIST);
    }

    return teamEntity;
  }

}

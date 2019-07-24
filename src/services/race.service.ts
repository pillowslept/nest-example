import { Injectable, NotFoundException } from '@nestjs/common';
import { RaceDto } from 'dto';
import { RACE_DOEST_EXIST } from 'utils/constants/messages';
import { Repository } from 'typeorm';
import { RaceEntity } from 'entities/race.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RaceService {

  constructor(
    @InjectRepository(RaceEntity)
    private raceRepository: Repository<RaceEntity>,
  ) {
  }

  async getAll(): Promise<RaceEntity[]> {
    return await this.raceRepository.find();
  }

  async getById(id: number): Promise<RaceEntity> {
    const race = await this.raceRepository.findOne({ where: { id }});
    return this.validateExistence(race);
  }

  async getByName(name: string): Promise<RaceEntity> {
    const race = await this.raceRepository.findOne({ where: { name }});
    return this.validateExistence(race);
  }

  async create(raceDto: RaceDto): Promise<RaceEntity> {
    const race = await this.raceRepository.create(raceDto);
    await this.raceRepository.save(race);
    return race;
  }

  private validateExistence(raceEntity: RaceEntity): RaceEntity {
    if (!raceEntity) {
      throw new NotFoundException(RACE_DOEST_EXIST);
    }

    return raceEntity;
  }

}

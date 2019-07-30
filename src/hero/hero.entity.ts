import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { RaceEntity } from 'race/race.entity';
import { TeamEntity } from 'team/team.entity';

@Entity('hero')
export class HeroEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(type => RaceEntity)
  @JoinTable()
  race: RaceEntity;

  @ManyToMany(type => TeamEntity, { cascade: true })
  @JoinTable()
  teams: TeamEntity[];

}

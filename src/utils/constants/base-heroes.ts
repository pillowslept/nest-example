import { Hero, Race, Team } from 'interfaces';

const HUMAN: Race = { name: 'Human', population: 10000 };
const KREE: Race = { name: 'Kree', population: 1500 };
const SKRULLS: Race = { name: 'Skrulls', population: 500 };
const CHITAURI: Race = { name: 'Chitauri', population: 5900 };
const ASGARDIANS: Race = { name: 'Asgardians', population: 1700 };

export const RACES: Race[] = [
  HUMAN,
  KREE,
  SKRULLS,
  CHITAURI,
  ASGARDIANS,
];

export const HEROES: Hero[] = [
  { name: 'Thor', race: ASGARDIANS },
  { name: 'Hulk', race: HUMAN },
  { name: 'Iron Man', race: HUMAN },
  { name: 'Black Widow', race: HUMAN },
  { name: 'Loki', race: ASGARDIANS },
  { name: 'Talos', race: SKRULLS },
  { name: 'Warbringer', race: CHITAURI },
];

export const TEAMS: Team[] = [
  { name: 'Avengers' },
  { name: 'Guardians of the Galaxy' },
];

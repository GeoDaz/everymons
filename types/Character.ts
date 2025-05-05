import { Type } from './Type';

export interface Character {
	key: string;
	name: string;
	types: Type[];
	abilities: string[];
	moves: string[];
	license: string;
	tags?: string[];
}

export type CharacterDict = { [key: string]: Character };

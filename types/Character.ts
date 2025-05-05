import { Type } from './Type';

export interface Character {
	name: string;
	types: Type[];
	abilities: string[];
	moves: string[];
	license: string;
}

export type CharacterDict = { [key: string]: Character };

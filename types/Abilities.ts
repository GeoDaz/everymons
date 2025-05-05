import { Type } from './Type';

export interface Ability {
	name: string;
	description?: string;
	type?: Type;
}

export type AbilityDict = { [key: string]: Ability };

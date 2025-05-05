import { Type } from './Type';

export interface Move {
	name: string;
	category: 'Physical' | 'Special' | 'Status';
	description: string;
	shortDescription: string;
	power: number;
	pp: number;
	accuracy: number | true;
	type: Type;
}

export type MoveDict = { [key: string]: Move };

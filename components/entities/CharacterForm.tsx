import Image from 'next/image';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import types from '@/json/types.json';
import abilities from '@/json/abilities.json';
import moves from '@/json/moves.json';
import { Input } from '../ui/input';
import Select from '../ui/select';
import { StringObject } from '@/types/Objects';
import { Button } from '../ui/button';
import { Character } from '@/types/Character';
import { useState } from 'react';
import { ValueOf } from 'next/dist/shared/lib/constants';

const items2 = [0, 1];
const items3 = [0, 1, 2];
const items4 = [0, 1, 2, 3];

const abilityOptions: StringObject = Object.entries(abilities).reduce(
	(acc, [key, value]) => {
		acc[key] = value.name;
		return acc;
	},
	{} as StringObject
);

const moveOptions: StringObject = Object.entries(moves).reduce((acc, [key, value]) => {
	acc[key] = value.name;
	return acc;
}, {} as StringObject);

const CharacterForm = ({ onSubmit }: { onSubmit: (character: Character) => void }) => {
	const [character, setCharacter] = useState<Character>({} as Character);

	const setValue = (key: string, value: ValueOf<Character>) => {
		setCharacter(prev => ({ ...prev, [key]: value }));
	};

	const setIndexedValue = (key: string, index: number, value: string) => {
		const values = character[key as keyof Character] as string[];
		values[index] = value;
		setValue(key, values);
	};

	const handleValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setValue(e.target.name, e.target.value);
	};

	return (
		<Card className="character editing">
			<CardHeader className="pb-4">
				<Badge variant="tertiary" className="absolute top-2 right-2">
					<Input placeholder="License" />
				</Badge>
				<div className="relative w-full h-[65px]">
					<Image
						src="/images/characters/upload.webp"
						alt="upload"
						fill
						className="object-contain"
						priority
					/>
				</div>
				<CardTitle className="text-center">
					<Input placeholder="Name" onChange={handleValue} />
				</CardTitle>
				<CardDescription className="grid grid-cols-2 gap-2">
					{items2.map(i => (
						<Select
							key={i}
							placeholder="Type"
							options={types}
							onChange={value => setIndexedValue('types', i, value)}
						/>
					))}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<div>
						<h4 className="font-semibold mb-1">Abilities</h4>
						<div className="grid grid-cols-2 gap-2">
							{items3.map(i => (
								<Select
									key={i}
									placeholder="Ability"
									options={abilityOptions}
									onChange={value =>
										setIndexedValue('abilities', i, value)
									}
								/>
							))}
						</div>
					</div>
					<div>
						<h4 className="font-semibold mb-1">Moves</h4>
						<div className="grid grid-cols-2 gap-2">
							{items4.map(i => (
								<Select
									key={i}
									placeholder="Move"
									options={moveOptions}
									onChange={value => setIndexedValue('moves', i, value)}
								/>
							))}
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="justify-end">
				<Button onClick={() => onSubmit(character)}>Validate</Button>
			</CardFooter>
		</Card>
	);
};

export default CharacterForm;

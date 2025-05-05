'use client';
import { useState } from 'react';
import CharacterCard from '@/components/entities/CharacterCard';
import charactersJson from '@/json/characters.json';
import { Character } from '@/types/Character';

const characters = charactersJson as Record<string, Character>;
const charactersArray = Object.values(characters) as Character[];

const byLicense = charactersArray.reduce((acc, character) => {
	acc[character.license] = acc[character.license] || [];
	acc[character.license].push(character.name);
	return acc;
}, {} as Record<string, string[]>);

const byTag = charactersArray.reduce((acc, character) => {
	if (character.tags) {
		character.tags.forEach(tag => {
			acc[tag] = acc[tag] || [];
			acc[tag].push(character.name);
		});
	}
	return acc;
}, {} as Record<string, string[]>);

const bys = {
	license: byLicense,
	tag: byTag,
};

type By = keyof typeof bys;
export default function Home() {
	// const [by] = useState<By>('tag');
	const [by] = useState<By>('license');

	return (
		<main className="p-8">
			{Object.entries(bys[by]).map(([label, values]) => (
				<div key={label} className="mb-8">
					<h2 className="text-2xl font-bold mb-4">{label}</h2>
					<div className="scroll-container">
						<div className="flex gap-4 w-max">
							{values.map(name => {
								const character = characters[name];
								return <CharacterCard key={name} character={character} />;
							})}
						</div>
					</div>
				</div>
			))}
		</main>
	);
}

'use client';

import { useState } from 'react';
// import CharacterCard from '@/components/entities/CharacterCard';
// import { Character } from '@/types/Character';
import CardAdd from '@/components/CardAdd';
import CharacterForm from '@/components/entities/CharacterForm';

export default function Home() {
	const [adding, setAdding] = useState<boolean>(false);
	// TODO localStorage
	return (
		<main className="flex flex-wrap p-8 gap-8 justify-center">
			{/* {Object.entries(characters as Record<string, Character>).map(
				([key, character]) => (
					<CharacterCard key={key} keyName={key} character={character} />
				)
			)} */}
			{adding ? (
				<CharacterForm onSubmit={() => setAdding(false)} />
			) : (
				<CardAdd handleAdd={() => setAdding(true)} />
			)}
		</main>
	);
}

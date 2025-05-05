import CharacterCard from '@/components/entities/CharacterCard';
import characters from '@/json/characters.json';
import { Character } from '@/types/Character';

export default function Home() {
	return (
		<main className="flex flex-wrap gap-8 justify-center">
			{Object.entries(characters as Record<string, Character>).map(
				([key, character]) => (
					<CharacterCard key={key} keyName={key} character={character} />
				)
			)}
		</main>
	);
}

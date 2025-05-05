import Image from 'next/image';
import { useState } from 'react';
import { Character } from '@/types/Character';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import MoveBadge from './MoveBadge';
import AbilityBadge from './AbilityBadge';
import TypeBadge from './TypeBadge';

interface Props {
	character: Character;
}

const CharacterCard = ({ character }: Props) => {
	const [imgSrc, setImgSrc] = useState(`/images/characters/${character.key}.webp`);

	return (
		<Card className="character">
			<CardHeader className="pb-4">
				<Badge variant="tertiary" className="absolute top-2 right-2">
					{character.license}
				</Badge>
				<div className="relative w-full h-[65px]">
					<Image
						src={imgSrc}
						onError={() => setImgSrc(`/images/characters/${character.key}.png`)}
						alt={character.name}
						fill
						className="object-contain"
						priority
					/>
				</div>
				<CardTitle className="text-center">{character.name}</CardTitle>
				<CardDescription className="flex gap-2 justify-center">
					{character.types.map(type => (
						<TypeBadge key={type} name={type} />
					))}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<div>
						<h4 className="font-semibold mb-1">Abilities</h4>
						<div className="flex flex-wrap gap-2">
							{character.abilities.map(ability => (
								<AbilityBadge key={ability} ability={ability} />
							))}
						</div>
					</div>
					<div>
						<h4 className="font-semibold mb-1">Moves</h4>
						<div className="flex flex-wrap gap-2">
							{character.moves.map(move => (
								<MoveBadge key={move} move={move} />
							))}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default CharacterCard;

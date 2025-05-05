import Image from 'next/image';
import { Character } from '@/types/Character';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Badge from '@/components/ui/badge';
import MoveBadge from './MoveBadge';
import AbilityBadge from './AbilityBadge';
import TypeBadge from './TypeBadge';

interface Props {
	keyName: string;
	character: Character;
}

const CharacterCard = ({ keyName, character }: Props) => {
	return (
		<Card className="w-[300px] overflow-hidden">
			<CardHeader className="pb-4">
				<div className="relative w-full h-[150px]">
					<Image
						src={`/images/characters/${keyName}.png`}
						alt={character.name}
						fill
						className="object-contain"
						priority
					/>
				</div>
				<CardTitle className="text-center mb-3">{character.name}</CardTitle>
				<CardDescription className="flex gap-2 justify-center">
					{character.types.map(type => (
						<TypeBadge key={type} type={type} />
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
			<CardFooter className="justify-end pb-4">
				<Badge variant="tertiary">{character.license}</Badge>
			</CardFooter>
		</Card>
	);
};

export default CharacterCard;

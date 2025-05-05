import Badge from '@/components/ui/badge';
import abilities from '@/json/abilities.json';
import { AbilityDict } from '@/types/Abilities';

interface Props {
	ability: string;
}

const AbilityBadge = ({ ability }: Props) => {
	const { name } = (abilities as AbilityDict)[ability] || {};
	return (
		<Badge variant="secondary" key={ability}>
			{/* TODO type icon */}
			{name}
		</Badge>
	);
};

export default AbilityBadge;

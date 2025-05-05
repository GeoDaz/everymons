import { MoveDict } from '@/types/Move';
import Badge from '@/components/ui/badge';
import moves from '@/json/moves.json';
import Icon from '../ui/icon';
import { typeColors, typeIcons } from '@/lib/types';

interface Props {
	move: string;
}

const MoveBadge = ({ move }: Props) => {
	const { type, name } = (moves as MoveDict)[move] || {};
	const icon = typeIcons[type];
	const typeColor = typeColors[type];
	return (
		<Badge variant={'outline' /* type || 'normal' */} key={move}>
			<Icon name={icon} className={`text-${typeColor}`} /> {name}
		</Badge>
	);
};

export default MoveBadge;

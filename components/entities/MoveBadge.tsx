import { MoveDict } from '@/types/Move';
import Badge from '@/components/ui/badge';
import moves from '@/json/moves.json';
import { typeColors, typeIcons } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
	move: string;
}

const MoveBadge = ({ move }: Props) => {
	const { type, name } = (moves as MoveDict)[move] || {};
	const icon = typeIcons[type];
	const typeColor = typeColors[type];
	return (
		<Badge variant={'outline' /* type || 'normal' */} key={move}>
			<span className={`text-${typeColor}`}>
				<FontAwesomeIcon icon={icon} className={`h-[1em] w-[1em] mr-2`} />
			</span>
			{name}
		</Badge>
	);
};

export default MoveBadge;

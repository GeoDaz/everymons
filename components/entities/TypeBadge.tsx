import { Type } from '@/types/Type';
import Badge from '@/components/ui/badge';
import { typeIcons } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
	name: Type;
}

const TypeBadge = ({ name }: Props) => {
	const icon = typeIcons[name];
	return (
		<Badge variant={name} key={name}>
			<FontAwesomeIcon icon={icon} className="h-[1em] w-[1em] mr-2" />
			{name}
		</Badge>
	);
};

export default TypeBadge;

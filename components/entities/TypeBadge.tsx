import { Type, TypeDict } from '@/types/Type';
import Badge from '@/components/ui/badge';
import types from '@/json/types.json';
import Icon from '../ui/icon';
import { typeIcons } from '@/lib/types';

interface Props {
	type: Type;
}

const TypeBadge = ({ type }: Props) => {
	const name = (types as TypeDict)[type];
	const icon = typeIcons[type];
	return (
		<Badge variant={type} key={type}>
			<Icon name={icon} /> {name}
		</Badge>
	);
};

export default TypeBadge;

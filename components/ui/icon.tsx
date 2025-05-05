import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const Icon = ({ name, ...props }: { name: IconName } & Partial<FontAwesomeIconProps>) => (
	<FontAwesomeIcon {...props} icon={`fa-solid fa-${name}` as IconProp} />
);

export default Icon;

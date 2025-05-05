import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent } from './ui/card';

const CardAdd = ({ handleAdd }: { handleAdd: () => void }) => (
	<Card className="character flex">
		<CardContent className="flex justify-center items-center grow">
			<div>
				<button onClick={handleAdd}>
					<FontAwesomeIcon icon={faPlus} className="text-2xl" />
					<br />
					Add a Character
				</button>
			</div>
		</CardContent>
	</Card>
);

export default CardAdd;

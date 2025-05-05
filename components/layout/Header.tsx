import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';

const Header = () => {
	return (
		<header className="bg-background flex justify-between items-center p-3 sticky top-0 z-50 w-full border-b">
			<div className="flex gap-4">
				<Link href="/">Everymons</Link>
				<Link href="/gallery">Gallery</Link>
			</div>
			<ModeToggle />
		</header>
	);
};

export default Header;

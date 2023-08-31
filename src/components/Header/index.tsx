import { Link } from 'react-router-dom';

import './styles.css';

export function Header() {
	return (
		<header>
			<div>
				<nav>
					<Link to="home">Home</Link>
					<Link to="second-page">Second page</Link>
				</nav>
			</div>
		</header>
	);
}

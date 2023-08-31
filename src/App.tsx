
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';

import './styles/global.css';

export function App() {
	return (
		<Router basename="/react-vite-ghpages-deploy">
			<AppRoutes />
		</Router>
	);
}

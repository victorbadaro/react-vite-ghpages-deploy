import { AppLayout } from '@/layouts/AppLayout';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { SecondPage } from '@/pages/SecondPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Navigate to="home" />} />
				<Route path="home" element={<Home />} />
				<Route path="second-page" element={<SecondPage />} />

				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

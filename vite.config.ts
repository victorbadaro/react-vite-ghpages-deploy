import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/react-vite-ghpages-deploy',
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') }
		]
	}
});

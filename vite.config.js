import { defineConfig } from 'vite';
process.env.BROWSER = 'google chrome canary';

export default defineConfig({
	root: './src',
	base: './',
	build: {
		outDir: '../dist'
	},
	server: {
		open: '/index.html'
	}
});

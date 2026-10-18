import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { pathToFileURL } from 'node:url';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'#lib': pathToFileURL('./src/lib/').href,
		},
	},
});

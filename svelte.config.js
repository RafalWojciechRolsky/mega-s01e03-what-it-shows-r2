import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.svx'],
			layout: { runbook: join(here, 'src/lib/layouts/runbook.svelte') },
		}),
		vitePreprocess(),
	],
	kit: {
		adapter: adapter(),
		prerender: { entries: ['*'] },
		alias: { '#lib': 'src/lib' },
	},
};

export default config;

import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter()
	},
	// https://stackoverflow.com/a/72733222
	adapter: adapter({
		pages: 'build',
		assets: 'build',
		fallback: null,
		precompress: false
	}),
	prerender: {
		default: true,
	},
	trailingSlash: 'always',
	paths: {
		base: '/wie-steht-es-um-das-klima-so'
	}
};

export default config;

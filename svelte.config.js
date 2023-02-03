import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

// https://kit.svelte.dev/docs/modules#$env-static-public
// import { PATHS_BASE } from '$env/static/public';

console.log('[svelte.config.js] process.env.PATHS_BASE set to', process.env.PATHS_BASE);

// TODO: use env from github actions -> 
let pathsBase = '';
// https://stackoverflow.com/posts/67978668/revisions
if (process.env.PATHS_BASE != undefined) {
	console.log('paths.base was set via node env variable', process.env.PATHS_BASE);
	pathsBase = process.env.PATHS_BASE;
} else {
	console.log('No paths.base set, defaults to \'\'');
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// https://stackoverflow.com/a/72733222
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			base: pathsBase
			// e.g. for github pages -> repository name: '/repository-name'
			//https://kit.svelte.dev/docs/adapter-static#github-pages
		}
	}
};

export default config;

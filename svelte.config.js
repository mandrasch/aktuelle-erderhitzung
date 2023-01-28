import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

import { env } from '$env/dynamic/private';

let pathsBase = '';
if(Object.prototype.hasOwnProperty.call(env,'pathsBase')){
	console.log('paths.base was set via node env variable',env.PATHS_BASE);
	pathsBase = env.PATHS_BASE;
}else{
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
		// This was removed? 
		/*prerender: {
			default: true,
		},*/
		// This was removed? 
		// trailingSlash: 'always',
		paths: {
			base: pathsBase
			// e.g. for github pagees: '/wie-steht-es-um-das-klima-so'
			//https://kit.svelte.dev/docs/adapter-static#github-pages
		}
	}
};

export default config;

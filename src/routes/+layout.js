export const prerender = true;

// Recommended by docs, if no rules for nginx/htacess are set
/* You must ensure SvelteKit's trailingSlash option is set appropriately for your environment. If your host does not render /a.html upon receiving a request for /a then you will need to set trailingSlash: 'always' to create /a/index.html instead.
https://kit.svelte.dev/docs/adapter-static#usage */
export const trailingSlash = 'always';
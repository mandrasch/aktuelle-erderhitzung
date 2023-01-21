
// Create a persisting store to store accepting of social media embeds
// https://github.com/joshnuss/svelte-local-storage-store
import { persisted } from 'svelte-local-storage-store';

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const preferences = persisted('preferences', {
	/** @type {(Array.<string>)} */
	gdprAcceptedEmbedProviders: []
});


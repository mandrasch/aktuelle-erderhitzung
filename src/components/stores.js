// We store the GDPR settings here via a simple svelte store,
// this will be cleared after browser reload
import { writable } from 'svelte/store';

export const gdprAcceptedEmbedProvidersStore = writable([]);

// This could also be solved via persistent local storage by
// https://github.com/joshnuss/svelte-local-storage-store
// Create a persisting store to store accepting of social media embeds
//import { persisted } from 'svelte-local-storage-store';
// First param `preferences` is the local storage key.
// Second param is the initial value.
//export const preferences = persisted('preferences', {
/** @type {(Array.<string>)} */
//gdprAcceptedEmbedProviders: []
//});
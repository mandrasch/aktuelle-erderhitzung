<script>
	import { gdprAcceptedEmbedProvidersStore } from './../stores.js';

	/** @type {String[]} */
	let gdprAcceptedEmbedProviders = [];
	gdprAcceptedEmbedProvidersStore.subscribe((newVal) => {
		gdprAcceptedEmbedProviders = newVal;
	});
	async function resetPreferences() {
		gdprAcceptedEmbedProvidersStore.update([]);
	}

	// Old implementation via persisting local storage, can be removed later:
	// https://github.com/joshnuss/svelte-local-storage-store
	//import { get } from 'svelte/store';
	// import { preferences } from '../stores';
	/*async function resetPreferences() {
		// TODO: how to reset to defaults easily? function in stores?
		await preferences.set({ gdprAcceptedEmbedProviders: [] });
		// TODO: necessary?
		// window.location.reload();
	}*/
</script>

<div class="container container-gdpr">
	<p>
		Du hast der Nutzung und Einbettung folgender <br />Dienste zugestimmt: {JSON.stringify(
			gdprAcceptedEmbedProviders
		)}
	</p>
	<button class="outline" on:click={resetPreferences}>Einstellungen zurücksetzen</button>
</div>

<style lang="scss">
	.container-gdpr {
		text-align: center;
		p {
			margin-bottom: 5px;
		}
	}
</style>

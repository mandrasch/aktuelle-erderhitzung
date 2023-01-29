<script>
	// https://github.com/joshnuss/svelte-local-storage-store
	import { get } from 'svelte/store';
	import { preferences } from './../stores';
	async function resetPreferences() {
		// TODO: how to reset to defaults easily? function in stores?
		await preferences.set({ gdprAcceptedEmbedProviders: [] });
		// TODO: necessary?
		// window.location.reload();
	}
</script>

<div class="container container-gdpr">
	<p>
		Du hast der Nutzung und Einbettung folgender <br />Dienste zugestimmt: {JSON.stringify(
			$preferences.gdprAcceptedEmbedProviders
		)}
	</p>
	<button class="outline" on:click={resetPreferences}>Einstellungen zurücksetzen</button>
</div>

<div class="container" style="text-align:center;margin-bottom:30px;">
	<a href="https://matthias-andrasch.eu/blog/impressum-datenschutz/">Datenschutz & Impressum</a>
</div>

<style lang="scss">
	button {
		border: none;
	}

	.container-gdpr {
		text-align: center;
		p {
			margin-bottom: 5px;
		}
	}
</style>

<script>
	// https://github.com/joshnuss/svelte-local-storage-store
	import { get } from 'svelte/store';
	import { preferences } from './../stores';

	// TODO: use allowed values for this? https://stackoverflow.com/questions/19093935/how-to-document-a-string-type-in-jsdoc-with-limited-possible-values; Look up svelte demo repo?
	/** @type {string} */
	export let provider;
	/** @type {string} */
	export let contentId;

	$: isAccepted = $preferences.gdprAcceptedEmbedProviders.includes(provider);

	function acceptProvider() {
		let newPrefs = get(preferences);
		// console.log({ newPrefs });
		// TODO: check if already exist
		newPrefs.gdprAcceptedEmbedProviders.push(provider);
		preferences.set(newPrefs);
	}

	preferences.subscribe(function (newPrefs) {
		console.log('PREF CHANGE!', { newPrefs });
	});

	// preferences.subscribe(...) // subscribe to changes
	//preferences.update(...) // update value
	//preferences.set(...) // set value
	//get(preferences); // read value
	//$preferences; // read value with automatic subscription
</script>

<!-- {JSON.stringify($preferences)}
IsAccepted?{JSON.stringify(isAccepted)}; Provider: {JSON.stringify(provider)}; -->

<div class="two-click-privacy-box">
	{#if provider === 'youtube'}
		{#if !isAccepted}
			<div class="dialog">
				<div class="dialog-content">
					<p>
						Mit dem Anzeigen des Videos stimmst Du der
						<a href="https://policies.google.com/privacy">Datenschutzerklärung</a>
						von YouTube/Google zu.
					</p>
					<button on:click={acceptProvider} class={provider}> Video anzeigen </button>
				</div>
			</div>
		{:else}
			<iframe
				width="100%"
				height="315"
				src={'https://www.youtube-nocookie.com/embed/' + contentId}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		{/if}
	{/if}

	<!-- TODO: would be cooler to use just the id to embed this, right now we use the slot and manual embed code generated via https://publish.twitter.com/# -->
	{#if provider === 'twitter'}
		{#if !isAccepted}
			<div class="dialog">
				<div class="dialog-content">
					<p>
						Mit der Anzeige des Tweets stimmst Du der
						<a href="https://twitter.com/de/privacy">Datenschutzerklärung</a>
						von Twitter zu.
					</p>
					<button on:click={acceptProvider} class={provider}> Tweet anzeigen </button>
				</div>
			</div>
		{:else}
			<div class="twitter-embed-code"><slot /></div>
		{/if}
	{/if}

	{#if provider === 'instagram'}
		{#if !isAccepted}
			<div class="dialog">
				<div class="dialog-content">
					<p>
						Mit der Anzeige des Instagram-Posts stimmst Du der
						<a
							href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
							>Datenschutzerklärung</a
						>
						von Instagram/Meta zu.
					</p>
					<button on:click={acceptProvider} class={provider}> Post anzeigen </button>
				</div>
			</div>
		{:else}
			<div class="twitter-embed-code"><slot /></div>
		{/if}
	{/if}

	<!-- TODO: Mastodon -->
</div>

<style lang="scss">
	.two-click-privacy-box {
		.dialog {
			border: 1px dashed var(--secondary);
			padding: 10px;
			margin: 10px 0;
			text-align: center;
			min-height: 300px;

			display: flex;
			justify-content: center;
			align-items: center;

			.dialog-content {
				button {
					width: 200px;
					margin: 0 auto;
				}
				button.twitter {
					background-color: #1c9bef;
					border-color: #1c9bef;
				}
				button.youtube {
					background-color: #ff3932;
					border-color: #ff3932;
				}
			}
		}
	}
</style>

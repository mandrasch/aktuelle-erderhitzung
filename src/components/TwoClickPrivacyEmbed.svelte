<script>
	import { gdprAcceptedEmbedProvidersStore } from './../stores.js';

	// Old implementation via
	// https://github.com/joshnuss/svelte-local-storage-store
	//import { get } from 'svelte/store';
	// import { preferences } from './../stores';

	// TODO: use allowed values for this? https://stackoverflow.com/questions/19093935/how-to-document-a-string-type-in-jsdoc-with-limited-possible-values; Look up svelte demo repo?
	/** @type {string} */
	export let provider;
	/** @type {string} */
	export let contentId;
	// TODO: how to mark as optional param in JSdoc?
	/** @type {string} */
	export let placeholderImg;

	let placeholderImgUrl = placeholderImg ? `url('${placeholderImg}')` : 'none';

	// old - via persistent storage:
	//$: isAccepted = $preferences.gdprAcceptedEmbedProviders.includes(provider);

	let isAccepted = false;
	/** @type {String[]} */
	let gdprAcceptedEmbedProvidersValue = [];

	// Currently deactivated, more sustainable to load one video after another manually
	/*
	gdprAcceptedEmbedProvidersStore.subscribe(
		// @param {String[]} newValue
		(newValue) => {
			// console.log('New value received for gdprAcceptedEmbedProviders store', newValue);
			isAccepted = newValue.includes(provider); // update acceptance state
			gdprAcceptedEmbedProvidersValue = newValue; // update value within component
		}
	);
	*/

	function acceptProvider() {
		// current manual approach, each video/embed has its own activation
		isAccepted = true;
		return;

		// provider approach - accept provider, everything will load:s

		// old via persisting storage, can be removed later
		// let newPrefs = get(preferences);
		// console.log({ newPrefs });
		// TODO: check if already exist
		//newPrefs.gdprAcceptedEmbedProviders.push(provider);
		//preferences.set(newPrefs);

		gdprAcceptedEmbedProvidersStore.update(
			/**
			 *
			 * @param {String[]} providers
			 */
			(providers) => {
				// TODO: check if already exist
				providers.push(provider);
				console.log('Setting new prefs for gdpr settings:', { providers });
				return providers;
			}
		);
	}

	// preferences.subscribe(...) // subscribe to changes
	//preferences.update(...) // update value
	//preferences.set(...) // set value
	//get(preferences); // read value
	//$preferences; // read value with automatic subscription
</script>

<!-- {JSON.stringify($preferences)}
IsAccepted?{JSON.stringify(isAccepted)}; Provider: {JSON.stringify(provider)}; -->

<div class="two-click-privacy-box" style="--placeholderImgUrl: {placeholderImgUrl}">
	<!-- {JSON.stringify(gdprAcceptedEmbedProvidersValue)} -->

	{#if provider === 'youtube'}
		{#if !isAccepted}
			<div class="dialog">
				<div class="dialog-content">
					<p>
						Mit dem Anzeigen des Videos stimmst Du <br /> der
						<a href="https://policies.google.com/privacy">Datenschutzerkl??rung</a>
						von YouTube/Google zu.
					</p>
					<button on:click={acceptProvider} class={provider}> Video laden </button>
				</div>
			</div>
		{:else}
			<div class="embed-display">
				<iframe
					width="100%"
					height="375"
					src={'https://www.youtube-nocookie.com/embed/' + contentId}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		{/if}
	{/if}

	<!-- TODO: would be cooler to use just the id to embed this, right now we use the slot and manual embed code generated via https://publish.twitter.com/# -->
	{#if provider === 'twitter'}
		{#if !isAccepted}
			<div class="dialog">
				<div class="dialog-content">
					<p>
						Mit dem Anzeigen von Tweets stimmst Du <br /> der
						<a href="https://twitter.com/de/privacy">Datenschutzerkl??rung</a>
						von Twitter zu.
					</p>
					<button on:click={acceptProvider} class={provider}> Tweets anzeigen </button>
				</div>
			</div>
		{:else}
			<div class="embed-display"><slot /></div>
		{/if}
	{/if}

	{#if provider === 'instagram'}
		{#if !isAccepted}
			<div class="dialog">
				<div class="dialog-content">
					<p>
						Mit dem Anzeigen von Instagram-Posts stimmst Du der
						<a
							href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
							>Datenschutzerkl??rung</a
						>
						von Instagram/Meta zu.
					</p>
					<button on:click={acceptProvider} class={provider}> Posts anzeigen </button>
				</div>
			</div>
		{:else}
			<div class="embed-display"><slot /></div>
		{/if}
	{/if}

	<!-- TODO: Mastodon -->
</div>

<style lang="scss">
	.two-click-privacy-box {
		margin: 0 auto;

		background-image: var(--placeholderImgUrl);
		background-size: cover;

		.dialog {
			background-color: rgba(0, 0, 0, 0.65);

			border: 1px dashed var(--secondary);
			padding: 10px;
			margin: 10px 0;
			text-align: center;
			min-height: 375px;

			display: flex;
			justify-content: center;
			align-items: center;

			.dialog-content {
				background-color: white;
				border-radius: 5px;
				padding: 20px;
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

		.embed-display {
			display: flex;
			justify-content: center;
		}
	}
</style>

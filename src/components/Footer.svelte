<script>
	import { base } from '$app/paths';
	//import TwoClickPrivacyEmbedSettings from './TwoClickPrivacyEmbedSettings.svelte';

	// build date time (retrieved in builds via github action)
	let buildDateTime = 'dev';
	if (
		typeof process !== 'undefined' &&
		process.hasOwnProperty('env') &&
		process.env.hasOwnProperty('BUILD_DATETIME')
	) {
		buildDateTime = process.env.BUILD_DATETIME;
	}
	// import { BUILD_DATETIME } from '$env/static/public';
	// let buildDateTime = BUILD_DATETIME ? BUILD_DATETIME : 'dev';
</script>

<div class="container" style="text-align:center;margin-bottom:30px;">
	<a href="{base}/impressum">Datenschutz & Impressum</a> |
	<a href="https://github.com/mandrasch/aktuelle-erderhitzung">GitHub</a>
	|
</div>

<style lang="scss">
	button {
		border: none;
	}
</style>

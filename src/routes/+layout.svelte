<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import '@fontsource/playfair-display';
	import '../scss/main.scss';
</script>

<!-- <Header /> -->

<main class="container">
	<slot />
</main>

<Footer />

<script>
	import { base } from '$app/paths';
</script>

<!-- Nav -->
<nav class="container">
	<ul>
		<li style="margin-left: 45px;">
			<a href="{base}/" class="contrast"><h1>Aktuelle Erderhitzung 🔥</h1></a>
		</li>
	</ul>
	<ul style="margin-right: 20px;">
		<a href="{base}/impressum">
			<li>About</li>
		</a>
	</ul>
</nav>

<!-- ./ Nav -->
<style lang="scss">
	h1 {
		font-size: 1rem;
		margin-top: 0;
		margin-bottom: 0;
	}
	header {
		margin-top: 18px;
	}
	nav a {
		--color: var(--secondary-hover);
	}
</style>

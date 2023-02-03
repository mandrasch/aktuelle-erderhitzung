<script>
	// build date time (retrieved in builds via github action)
	// TODO: how to use it? can't access process.env here? in server.js?
	let buildDateTime = '';
	if (
		typeof process !== 'undefined' &&
		process.hasOwnProperty('env') &&
		process.env.hasOwnProperty('BUILD_DATETIME')
	) {
		buildDateTime = process.env.BUILD_DATETIME || '';
	}
</script>

Zuletzt aktualisiert: {buildDateTime}

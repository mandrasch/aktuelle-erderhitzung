<script>
	// build date time (retrieved in builds via github action)
	let buildDateTime = 'dev';
	if (
		typeof process !== 'undefined' &&
		process.hasOwnProperty('env') &&
		process.env.hasOwnProperty('BUILD_DATETIME')
	) {
		buildDateTime = process.env.BUILD_DATETIME;
	}
</script>

Zuletzt aktualisiert: {buildDateTime}

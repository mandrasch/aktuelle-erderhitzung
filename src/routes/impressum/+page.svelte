<script>
	import TwoClickPrivacyEmbedSettings from '../../components/TwoClickPrivacyEmbedSettings.svelte';
	import { base } from '$app/paths';
</script>

<div><a href="{base}/">Zurück</a></div>

<article>
	<header>Datenschutz & Impressum</header>
	<h2>Impressum</h2>

	<p>
		Matthias Andrasch<br />
		1160 Wien<br />
		Österreich
	</p>

	<p>Kontakt: matthias-andrasch-kontakt@mailbox.org</p>

	<p>
		Ich bin interessierter Laie, diese Webseite wurde als Privatperson verfasst und ist
		höchstwahrscheinlich nicht mehr als ein Tropfen auf den heißen Stein.
	</p>

	<h2>Copyright</h2>
	<p>
		Die selbst verfassten Inhalte (Text) stehen frei als <a
			href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">CC0/Public Domain</a
		> zur Weiternutzung zur Verfügung. Ausgenommen davon sind zitierte Grafiken, Fotos sowie die Social-Media-Einbettungen.
	</p>
	<p>
		Der <a href="https://github.com/mandrasch/aktuelle-erderhitzung">Source Code</a> steht auf GitHub
		zur Nachnutzung bereit. Die Seite wurde mit SvelteKit und PicoCSS erstellt. Das Deployment wird über
		ploi.io realisiert.
	</p>

	<h2>Datenschutz</h2>

	<p>Diese Webseite erhebt keine personenbezogenen Daten.</p>
	<p>
		Diese Webseite wird beim Hostinganbieter Hetzner Cloud (Server-Standort: Nürnberg) betrieben, es
		werden keine personenbezogenen Daten von Besucher:innen in Server-Logs o.ä. erhoben.
	</p>

	<p>
		Für die Einbindung der externen Social Media Dienste wird die Einwilligung explizit abgefragt
		und nach einem Browser-Reload wieder gelöscht. Die Datenschutzerklärungen der Drittanbieter
		findet sich verlinkt im jeweiligen Einwilligungsdialog, die Einbettung erfolgt explizit erst
		nachdem der/die Besucher:in eingewilligt hat.
	</p>
	<!-- <p>Die Einstellungen können hier zurückgesetzt werden:</p>

<TwoClickPrivacyEmbedSettings />
-->
</article>

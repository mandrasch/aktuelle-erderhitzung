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

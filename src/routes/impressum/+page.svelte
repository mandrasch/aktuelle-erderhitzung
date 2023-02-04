<script>
	import TwoClickPrivacyEmbedSettings from '../../components/TwoClickPrivacyEmbedSettings.svelte';
	import { base } from '$app/paths';
</script>

<div style="margin-top:25px;"><a href="{base}/">&laquo; Zurück</a></div>

<article>
	<header>Datenschutz & Impressum</header>
	<h2>Impressum</h2>

	<p>
		Matthias Andrasch<br />
		1160 Wien<br />
		Österreich
	</p>

	<p>
		Kontakt: matthias-andrasch-kontakt@mailbox.org<br />
		Insta: <a href="https://www.instagram.com/matzimo404/">@matzimo404</a><br />
		Web: <a href="https://mandrasch.dev">mandrasch.dev</a><br />
	</p>

	<h2>Datenschutz</h2>

	<p>
		Die Webseite <a href="https://aktuelle-erderhitzung.de">aktuelle-erderhitzung.de</a> erhebt keine
		personenbezogenen Daten.
	</p>
	<p>
		Diese Webseite wird beim Hostinganbieter Hetzner Cloud (Server-Standort: Nürnberg) betrieben, es
		werden keine personenbezogenen Daten von Besucher:innen in Server-Logs o.ä. erhoben.
	</p>

	<p>
		Für die Einbindung der externen Social Media Dienste (Drittanbieter) wird die Einwilligung
		explizit abgefragt und nach einem Browser-Reload wieder gelöscht. Die Datenschutzerklärungen der
		Drittanbieter finden sich verlinkt im jeweiligen Einwilligungsdialog, die Einbettung erfolgt
		explizit erst nachdem der/die BesucherIn eingewilligt hat.
	</p>
	<p>
		Vor der Einwillung werden keine Datenverbindungen zu Drittanbietern aufgebaut, die
		Vorschaubilder werden vom Server aktuelle-erderhitzung.de geladen.
	</p>

	<!-- <p>Die Einstellungen können hier zurückgesetzt werden:</p>

<TwoClickPrivacyEmbedSettings />
-->
</article>

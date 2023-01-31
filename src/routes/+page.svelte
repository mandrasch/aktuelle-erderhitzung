<script>
	import TwoClickPrivacyEmbed from '../components/TwoClickPrivacyEmbed.svelte';
	import Toc from 'svelte-toc';

	import { base } from '$app/paths';

	// We could use /static/images as well and use these images via regular path,
	// see https://kit.svelte.dev/docs/assets for more information
	import img5GradPng from '../images/5_grad_grafik_moment_at.png';
	import img5GradWebP from '../images/5_grad_grafik_moment_at.webp';
	import imgTemperaturLebenszeitPng from '../images/temperaturanstieg_lebenszeit_moment_at.png';
	import imgTemperaturLebenszeitWebP from '../images/temperaturanstieg_lebenszeit_moment_at.webp';
	import imgAktuelleErderhitzungPng from '../images/aktuelle_erderhitzung_klimadashboard_at.png';
	import imgAktuelleErderhitzungSpiegelOnline from '../images/aktuelle_erderhitzung_spiegel_online.png';
	import TwoClickPrivacyEmbedSettings from '../components/TwoClickPrivacyEmbedSettings.svelte';
</script>

<!-- Base URL: {JSON.stringify(base)} -->

<div class="main-layout">
	<Toc title="Inhalt" --toc-font-size="0.2rem" --toc-desktop-width="300em" />

	<main>
		<article>
			<header>
				<h2>Aktuelle Erderhitzung 🔥</h2>
			</header>
			<h3>Wie hoch ist die aktuelle Erderhitzung?</h3>
			<p>
				Viele reden vom Klimwandel und der Erderwärmung. Aber wie sehr hat sich der Planet Erde nun
				schon erhitzt? Und wo steuern wir hin als Gemeinschaft?
			</p>
			<p>
				Die aktuelle Erderwärmung wird derzeit mit 1,1 Grad bzw. teils sogar schon mit 1,2 Grad
				Celsius angegeben (Stand: 21. Jänner 2023):
			</p>
			<div class="image-block">
				<a href="https://klimadashboard.at">
					<img
						src={imgAktuelleErderhitzungPng}
						alt="Aktuelle Erhitzung laut klimadashboard.at: 1,1 Grad Celsius"
					/>
				</a>
				<div class="image-source">
					Quelle / Urheberrechte: <a href="https://klimadashboard.at">klimadashboard.at</a>
				</div>
			</div>
			<div class="image-block">
				<a href="https://www.spiegel.de/thema/klimawandel/">
					<img
						src={imgAktuelleErderhitzungSpiegelOnline}
						alt="Aktuelle Erhitzung laut Spiegel Online: 1,2 Grad Celsius"
					/>
				</a>
				<div class="image-source">
					Quelle / Urheberrechte: <a href="https://www.spiegel.de/thema/klimawandel/"
						>spiegel.de/thema/klimawandel</a
					>
				</div>
			</div>

			<details>
				<summary role="button" class="secondary">Datenquellen</summary>
				<p>
					<small>
						Die Daten stammen aus den Forschungsberichten des <a
							href="https://de.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change"
							>Intergovernmental Panel on Climate Change (IPCC)</a
						>, oft umgangssprachlich als "Weltklimarat" bezeichnet. Das IPCC wurde gegründet, „um
						für politische Entscheidungsträger den Stand der wissenschaftlichen Forschung zum
						Klimawandel zusammenzufassen“ (<a
							href="https://de.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change"
							>Wikipedia</a
						>). Mehr zu den Datenquellen auf
						<a href="https://klimadashboard.at/">klimadashboard.at</a>
						sowie
						<a href="https://www.spiegel.de/thema/klimawandel/">spiegel.de/thema/klimawandel</a
						>.</small
					>
				</p>
				<p>
					<small>
						Deep dive: Der sechste IPCC-Sachstandsbericht (August 2021) wird u.a. im Podcast
						<a href="https://dasklima.podigee.io/">Das Klima</a> besprochen.
					</small>
				</p>
			</details>

			<h3>Können wir das "1,5 Grad"-Limit noch schaffen?</h3>

			<p>
				Alle (!) Staaten dieser Welt haben sich mit dem <a
					href="https://www.ardalpha.de/wissen/umwelt/klima/klimawandel/klimaabkommen-paris-protokoll-klimapolitik-klimawandel-102.html"
					>Pariser Klimaabkommen</a
				>
				das Ziel gesetzt, die globale Erhitzung gemeinsam auf 1,5 Grad - allerhöchstens 2 Grad - zu begrenzen.
				Diese Zielvereinbarung wurde inzwischen von allen Staaten weltweit
				<a
					href="https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXVII-7-d&chapter=27&clang=_en"
					aria-label="Link zur Unterzeichnungsliste der UN">unterzeichnet.</a
				><!-- , nur 4 Staaten (Eritrea, Iran, Lybien, Yemen) haben den Vertrag noch nicht ratifiziert.-->
				<br />Die Dramatik: Bisher reichen die Handlungen der Staaten bei Weitem nicht aus. Für das
				Stoppen der Erhitzung bei 1,5 Grad bleibt nur noch ein schmaler Pfad, sehr schnelle und sehr
				konsequente Maßnahmen sind jetzt nötig:
			</p>

			<TwoClickPrivacyEmbed provider="youtube" contentId="V0TPithzs-A" />
			<div class="image-source">
				Video: <a href="https://youtu.be/V0TPithzs-A"
					>Re-Upload: Können wir 1,5 Grad Erderwärmung überhaupt noch einhalten?</a
				>
				(Original-Quelle:
				<a href="https://twitter.com/rahmstorf/status/1593495465261256707">Twitter</a>)
			</div>

			<!-- TODO: mark second param as optional in JSDoc-->
			<!-- <TwoClickPrivacyEmbed provider="twitter">
				<blockquote class="twitter-tweet">
					<p lang="de" dir="ltr">
						Können wir 1,5 Grad Erderwärmung überhaupt noch einhalten?<br />Hab’s kurz erklärt
						gestern Abend bei Europe calling u.a. mit Außenministerin Baerbock live von der
						<a href="https://twitter.com/hashtag/COP27?src=hash&amp;ref_src=twsrc%5Etfw">#COP27</a>.
						<a href="https://t.co/muo8xcuX0F">pic.twitter.com/muo8xcuX0F</a>
					</p>
					&mdash; Stefan Rahmstorf 🌏 fediscience.org/@rahmstorf 🦣 (@rahmstorf)<a
						href="https://twitter.com/rahmstorf/status/1593495465261256707?ref_src=twsrc%5Etfw"
						>November 18, 2022</a
					>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</TwoClickPrivacyEmbed>-->

			<p style="margin-top:25px;">
				<small
					>Mehr zu den Maßnahmen einzelner Staaten u.a. auf <a
						href="https://climateactiontracker.org/countries/"
						>climateactiontracker.org/countries/</a
					>.</small
				>
			</p>

			<h3>Auf welche Erhitzung bewegen wir uns zu?</h3>

			<p>Derzeit befinden wir uns sogar auf dem Weg zu einer +3 Grad Erwärmung:</p>

			<TwoClickPrivacyEmbed provider="twitter">
				<blockquote class="twitter-tweet">
					<p lang="de" dir="ltr">
						Auf welchem Emissionspfad sind wir, und wo sollten wir zur Einhaltung von 1,5 Grad sein? <br
						/>Hab’s kurz erklärt gestern Abend bei Europe Calling u.a. mit Außenministerin Baerbock
						live von der
						<a href="https://twitter.com/hashtag/COP27?src=hash&amp;ref_src=twsrc%5Etfw">#COP27</a>
						. <a href="https://t.co/VwOwtSOw3A">pic.twitter.com/VwOwtSOw3A</a>
					</p>
					&mdash; Stefan Rahmstorf 🌏 fediscience.org/@rahmstorf 🦣 (@rahmstorf)<a
						href="https://twitter.com/rahmstorf/status/1593536876312420352?ref_src=twsrc%5Etfw"
						>November 18, 2022</a
					>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</TwoClickPrivacyEmbed>

			<h3>Welchen Unterschied macht das?</h3>
			<picture>
				<source type="image/webp" srcset={img5GradWebP} />
				<source type="image/png" srcset={img5GradPng} />
				<img
					src={img5GradPng}
					alt="Infografik von moment.at: Was die Klimakrise für uns Menschen bedeutet, Szenarien aufgeteilt nach der jeweiligen Grad-Erhöhung"
				/>
			</picture>
			<div class="image-source">
				Quelle / Urheberrechte: <a
					href="https://www.moment.at/story/klimakrise-so-heiss-koennte-es-deinem-leben-noch-werden"
					>moment.at</a
				>
			</div>
			<h3>Welche Erhitzung erlebt man selbst noch?</h3>
			<p>
				Wenn es bei den derzeitigen, unzureichenden Maßnahmen bleibt und sich die Erde weiter stark
				erhitzt - welche Erhitzung erlebt man sebst noch, welche Erhitzung erleben die jungen und
				zukünftigen Generationen?
			</p>
			<picture>
				<source type="image/webp" srcset={imgTemperaturLebenszeitWebP} />
				<source type="image/png" srcset={imgTemperaturLebenszeitPng} />
				<img
					src={imgTemperaturLebenszeitPng}
					alt="Infografik moment.at: Diese Erwärmung könntest du noch erleben."
				/>
			</picture>
			<div class="image-source">
				Quelle / Urheberrechte: <a
					href="https://www.moment.at/story/klimakrise-so-heiss-koennte-es-deinem-leben-noch-werden"
					>moment.at</a
				>
			</div>

			<h2>Die nächsten 7 Jahre entscheiden</h2>

			<p>Der langjährige Klimaforscher Stefan Rahmstorf schreibt am 14.Januar 2023:</p>

			<TwoClickPrivacyEmbed provider="twitter">
				<blockquote class="twitter-tweet">
					<p lang="de" dir="ltr">
						Manche Menschen verstehen einfach nicht, was die Klimaforschung sagt: in 7 (!!!) Jahren
						müssen die CO2-Emissionen halbiert sein, um das Pariser Abkommen einzuhalten. Also nicht
						studieren &amp; forschen, sondern Ausstieg aus fossilen &amp; EE-Ausbau sofort sind
						notwendig! <a href="https://t.co/R1lctxn925">https://t.co/R1lctxn925</a>
						<a href="https://t.co/Ka6BvXpXWz">pic.twitter.com/Ka6BvXpXWz</a>
					</p>
					&mdash; Stefan Rahmstorf 🌏 fediscience.org/@rahmstorf 🦣 (@rahmstorf)<a
						href="https://twitter.com/rahmstorf/status/1614217456536395776?ref_src=twsrc%5Etfw"
						>January 14, 2023</a
					>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</TwoClickPrivacyEmbed>

			Die Psychologists For Future Lea Dohm und Mareike Schulze schreiben in ihrem Buch
			<a
				href="https://www.droemer-knaur.de/buch/lea-dohm-mareike-schulze-klimagefuehle-9783426286159"
				>Klimagefühle</a
			>:

			<blockquote>
				„Wir leben in einer Zeit, in der eine große Verantwortung auf uns lastet, das Ruder noch
				herumzureißen. Egal, ob wir das doof finden - so ist es nun einmal.“
			</blockquote>

			<p>
				Die langjährigen Klimaforscher Reinhard Steurer und Joachim Schellnhuber werden noch
				deutlicher mit Bezug auf die Welt, die die jetzigen Kinder erleben werden wenn sich nichts
				am Tempo der Klimakrise ändert:
			</p>

			<TwoClickPrivacyEmbed provider="twitter">
				<blockquote class="twitter-tweet">
					<p lang="de" dir="ltr">
						Es geht dabei in erster Linie um den Schutz von Leben und von unserer Zivilisation. In
						den nächsten Jahren entscheiden wir darüber, ob unsere Gesellschaften eine gute Zukunft
						haben oder noch in diesem Jahrhundert im Chaos versinken werden. 2/ <a
							href="https://t.co/dGjVoBkxJh">pic.twitter.com/dGjVoBkxJh</a
						>
					</p>
					&mdash; Reinhard @Steurer@mas.to (@ReiSteurer)<a
						href="https://twitter.com/ReiSteurer/status/1605972450172211424?ref_src=twsrc%5Etfw"
						>December 22, 2022</a
					>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</TwoClickPrivacyEmbed>

			<p style="margin-top:25px;font-style:italic;">
				Und trotz allem: Keine Kinder in die Welt bringen nur wegen des CO2-Fußabdrucks? Dies ist
				rein mit wissenschaftlichen Daten nicht einwandfrei zu begründen, siehe u.a. <a
					href="https://www.derstandard.at/story/2000142620963/darf-man-heute-noch-kinder-bekommen"
					>„Darf man heute noch Kinder bekommen?“ (Der Standard)
				</a>,
				<a href="https://www.washingtonpost.com/climate-environment/2022/12/02/climate-kids/"
					>„Should you not have kids because of climate change? It’s complicated“ (Washington Post)
				</a>.
			</p>

			<h2>Maßnahmen gegen die Klimakrise</h2>

			<p>
				Was konkret nötig ist, um die Klimakrise zu stoppen, steht unter anderem seit Jahren in den
				Berichten des IPCC:
			</p>

			<blockquote>
				Weltklimarat IPCC: Jetzt oder nie handeln. <br />“Die Zeit zum Handeln ist jetzt. Wir können
				die Emissionen bis 2030 halbieren.“ Das ist die Kernbotschaft des heute veröffentlichten
				Weltklimaberichts. (<a
					href="https://www.riffreporter.de/de/umwelt/weltklimabericht-ipcc-april-2022-klimawandel-politik-klimaschutz-loesungen-wgiii"
					>riffreporter.de, 04.April 2022</a
				>)
			</blockquote>

			<p>Weiterhin gibt es eine Vielzahl von Dokumentationen, Podcasts, Texten, etc.:</p>

			<TwoClickPrivacyEmbed provider="youtube" contentId="itllxeBM8ro" />
			<div class="image-source">
				Video:
				<a href="https://www.youtube.com/watch?v=itllxeBM8ro">
					Klimawandel: Was wir jetzt tun müssen | Quarks TabulaRasa</a
				>
			</div>

			<ul style="margin-top:25px;">
				<li>
					<a href="https://www.youtube.com/watch?v=bCvUwnIdqBI"
						>Klimawandel - Was wir tatsächlich tun können (feat. maiLab) | WDR Doku
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/watch?v=s2txunrkr8M"
						>Klimakrise – Zeit zu kapitulieren? | Harald Lesch
					</a>
				</li>
				<li>
					<a
						href="https://daserste.ndr.de/panorama/archiv/2023/Das-Klima-und-die-Reichen,klimareiche100.html"
						>Das Klima und die Reichen | ARD</a
					>
				</li>
			</ul>

			<h2>Artensterben / Biodiversitätskrise</h2>

			<p>
				Die Erhitzung der Erde beschleunigt potenziell auch weitere Krisen: Aktuell sterben massiv
				Tier- und Pflanzenarten aus. Der Kriminalbiologe Mark Benecke war zum Thema Klimakrise und
				Artensterben bei <a href="https://www.instagram.com/nachhaltig.kritisch/"
					>nachhaltig.kritisch</a
				>
				im Podcast:
				<a
					href="https://podcasts.google.com/feed/aHR0cHM6Ly9wb2RsYWJlbC5wb2RjYXN0ZXIuZGUvbmFjaGhhbHRpZ2tyaXRpc2NocG9kY2FzdC5yc3M/episode/cG9kLTYzYzQ5YTAwNmE2NjQzMDU4MzQ5NDI?sa=X&ved=0CAUQkfYCahcKEwjg1Oqa4ez8AhUAAAAAHQAAAAAQAQ"
					>„Wer hat das Klima ermordet“</a
				>.
			</p>
			<p>
				Des Weiteren hielt er auf der republica 2022 den schonungslosen Talk
				<a href="https://www.youtube.com/watch?v=UAkZz3DMppg"
					>„Bienchen und Blümchen: Warum der Arten-Schwund so herbe nervt“</a
				>.
			</p>

			<p>
				Den Blick auf das gesamte System richten Transformationsforscher:innen wie Maja Göpel: <a
					href=""
					>„re:publica 2022: Maja Göpel: Her mit der besseren Zukunft“
				</a>.
			</p>

			<!-- <TwoClickPrivacyEmbed provider="instagram">
		<blockquote
			class="instagram-media"
			data-instgrm-captioned
			data-instgrm-permalink="https://www.instagram.com/p/CnePZMHM7fC/?utm_source=ig_embed&amp;utm_campaign=loading"
			data-instgrm-version="14"
			style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
		>
			<div style="padding:16px;">
				<a
					href="https://www.instagram.com/p/CnePZMHM7fC/?utm_source=ig_embed&amp;utm_campaign=loading"
					style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
					target="_blank"
				>
					<div style=" display: flex; flex-direction: row; align-items: center;">
						<div
							style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"
						/>
						<div
							style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"
						>
							<div
								style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"
							/>
							<div
								style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"
							/>
						</div>
					</div>
					<div style="padding: 19% 0;" />
					<div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
						<svg
							width="50px"
							height="50px"
							viewBox="0 0 60 60"
							version="1.1"
							xmlns="https://www.w3.org/2000/svg"
							xmlns:xlink="https://www.w3.org/1999/xlink"
							><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
								><g transform="translate(-511.000000, -20.000000)" fill="#000000"
									><g
										><path
											d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
										/></g
									></g
								></g
							></svg
						>
					</div>
					<div style="padding-top: 8px;">
						<div
							style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"
						>
							Sieh dir diesen Beitrag auf Instagram an
						</div>
					</div>
					<div style="padding: 12.5% 0;" />
					<div
						style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"
					>
						<div>
							<div
								style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"
							/>
							<div
								style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"
							/>
							<div
								style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"
							/>
						</div>
						<div style="margin-left: 8px;">
							<div
								style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"
							/>
							<div
								style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"
							/>
						</div>
						<div style="margin-left: auto;">
							<div
								style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"
							/>
							<div
								style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"
							/>
							<div
								style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"
							/>
						</div>
					</div>
					<div
						style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"
					>
						<div
							style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"
						/>
						<div
							style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"
						/>
					</div></a
				>
				<p
					style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"
				>
					<a
						href="https://www.instagram.com/p/CnePZMHM7fC/?utm_source=ig_embed&amp;utm_campaign=loading"
						style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;"
						target="_blank">Ein Beitrag geteilt von nachhaltig.kritisch (@nachhaltig.kritisch)</a
					>
				</p>
			</div>
		</blockquote>
		<script async src="//www.instagram.com/embed.js"></script>
	</TwoClickPrivacyEmbed> -->

			<h2>Warum hat niemand etwas unternommen?</h2>

			<p>
				Klimaforscher Reinhard Steurer blickte auf Twitter auf die letzten 25 Jahre wie folgt
				zurück:
			</p>

			<TwoClickPrivacyEmbed provider="twitter">
				<blockquote class="twitter-tweet">
					<p lang="de" dir="ltr">
						Seit 25 Jahren versuche ich, die größte Krise der Menschheit zu verstehen und zu einer
						Lösung durch Wissen beizutragen. In dieser Zeit hat sie sich von Klimawandel zu
						Klimanotstand radikalisiert. Wie hält man das aus &amp; was hat das mit meinen
						Erkenntnissen gemacht? Langer 🧵 1/24 <a href="https://t.co/Y7AJK1qpjF"
							>pic.twitter.com/Y7AJK1qpjF</a
						>
					</p>
					&mdash; Reinhard @Steurer@mas.to (@ReiSteurer)<a
						href="https://twitter.com/ReiSteurer/status/1599000778273828864?ref_src=twsrc%5Etfw"
						>December 3, 2022</a
					>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</TwoClickPrivacyEmbed>

			<p style="margin-top:25px;">
				Mehr dazu auch im Video <a href="https://www.youtube.com/watch?v=G86wu0BOOJI"
					>"Was man in den 70ern wusste – und verschwiegen hat (Harald Lesch)</a
				>
				" sowie in der Dokumentation
				<a href="https://filmsfortheearth.org/filme/die-erdzerstoerer/"
					>Die Erdzerstörer (ARTE, 2019)"</a
				>.
			</p>

			<h3>Müssen einfach mehr Menschen Bescheid wissen?</h3>
			<p>
				Der Ausspruch <a
					href="https://clubofrome.de/news/wir-haben-kein-erkenntnisproblem-sondern-ein-umsetzungsproblem/"
					>„Wir haben kein Erkenntnisproblem, sondern ein Umsetzungsproblem“</a
				>
				klingt abgedroschen, trifft bei der Klimakrise aber zu. Das Wissen über die Klimakrise allein
				reicht nicht aus. Menschen ändern nicht allein wegen Wissen ihr Verhalten. Dies wurde in der
				Forschung rund um die
				<a href="https://www.youtube.com/watch?v=8fyI3JJL2dA&list=WL&index=172&t=10376s"
					>"Wissens-Defizit-Hypothese"</a
				> bereits untersucht.
			</p>

			<h3>Mein Land hat doch nur einen ganz kleinen Anteil?!</h3>

			<p>
				In jedem Land gibt es Argumente wie "Aber wir verursachen doch derzeit nur einen kleinen
				Anteil an den weltweiten Emissionen - warum sollen gerade wir etwas tun?". Die Klimakrise
				ist eine globale Herausforderung:
			</p>

			<TwoClickPrivacyEmbed provider="twitter">
				<blockquote class="twitter-tweet">
					<p lang="de" dir="ltr">
						&quot;Österreich verursacht eh nur 0,2% der globalen Emissionen!&quot; sagt die ÖVP und <a
							href="https://twitter.com/claudiaplakolm?ref_src=twsrc%5Etfw">@claudiaplakolm</a
						>
						und lehnt sich zurück. Messerscharfe Replik auf diesen Denkfehler von
						<a href="https://twitter.com/ReiSteurer?ref_src=twsrc%5Etfw">@ReiSteurer</a>.
						<a href="https://t.co/AFRTZmDKhE">pic.twitter.com/AFRTZmDKhE</a>
					</p>
					&mdash; Daniel Tempo 100 Bleninger (@bleninger@wien.rocks) (@BleningerDaniel)<a
						href="https://twitter.com/BleningerDaniel/status/1613271926121570316?ref_src=twsrc%5Etfw"
						>January 11, 2023</a
					>
				</blockquote>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</TwoClickPrivacyEmbed>

			<h2>Klimaangst? Du bist nicht allein!</h2>

			<p>
				<strong>"Klimaangst"?</strong> Die Psychologists for Future haben Tipps und Ratschläge für
				den Umgang mit der erschlagenden Realität der Klimakrise gesammelt:
				<a href="https://utopia.de/ratgeber/klimaangst-richtiger-umgang-psychologe/"
					>„Wie geht man mit „Klimaangst“ um?“</a
				>.
			</p>
			<p>
				Kürzlich erschien das Buch
				<a
					rel="noreferrer noopener"
					href="https://www.droemer-knaur.de/buch/lea-dohm-mareike-schulze-klimagefuehle-9783426286159"
					target="_blank"
					>„Klimagefühle - Wie wir an der Umweltkrise wachsen, statt zu verzweifeln“
				</a>
				von Lea Dohm und Mareike Schulze (Psychologists for Future Deutschland). Es ist auch als Hörbuch
				<a
					rel="noreferrer noopener"
					href="https://open.spotify.com/album/4jiOmIlad5pxgOGH1dQCT3"
					target="_blank">auf Spotify verfügbar.</a
				>
			</p>

			<p>
				<strong>Ohnmacht?</strong>
				Im Podcast Hotel Matze erschien kürzlich die Folge
				<a
					rel="noreferrer noopener"
					href="https://mitvergnuegen.com/hotelmatze/luisa-neubauer-2022/"
					target="_blank">„Wie bekämpft man die Ohnmacht?“</a
				> mit Luisa Neubauer (Fridays for Future Deutschland).
			</p>

			<p style="font-style:italic;">
				Eine detaillierte wissenschaftliche Auseinandersetzung mit dem umgangssprachlichen Begriff
				„Klimaangst" findet sich
				<a
					href="https://www.psychologistsforfuture.org/klimaangst/"
					aria-label="Klimaangst - Psychologists for Future">hier</a
				>.
			</p>
			<h2>Stay connected</h2>

			<p>
				Auf Instagram finden sich zahlreiche Profile und Communities zu Klima-Themen: <a
					href="https://www.instagram.com/nachhaltig.kritisch/">nachhaltig.kritisch</a
				>,
				<a href="https://www.instagram.com/klima.neutral/">klima.neutral</a>,
				<a href="https://www.instagram.com/treibhauspost/">treibhauspost</a>,
				<a href="https://www.instagram.com/gesunde.erde.gesunde.menschen/"
					>gesunde.erde.gesunde.menschen</a
				>, <a href="https://www.instagram.com/klimagefuehle/">Klimagefühle</a> & viele mehr.
			</p>
			<p>
				In Bezug auf Nachhaltiges Wirtschaften gibt es ebenfalls viele Initiativen, z.B. <a
					href="https://www.bcorporation.net/en-us/">B-Corp</a
				>, <a href="https://doughnuteconomics.org/">Donut-Ökonomie</a>,
				<a href="https://www.youtube.com/watch?v=YxJrBR0lg6s">Green Growth vs. Degrowth</a>,
				<a href="https://germany.ecogood.org/">Gemeinwohl-Ökonomie</a>.
			</p>
			<p>
				Der nächste <a href="https://fridaysforfuture.de/globaler-klimastreik/"
					>globale Klimastreik</a
				> findet am 3. März 2023 statt.
			</p>
		</article>
	</main>
</div>

<style lang="scss">
	// override via css var did not work because of picocss ,
	// needed to use global svelte overrides 🤔
	:global(aside.toc.desktop) {
		position: sticky;
		background: transparent; // var(--toc-desktop-bg);;
		padding: 20px; // var(--toc-desktop-nav-margin);
		// max-width: var(--toc-desktop-max-width);;
		top: var(--toc-desktop-sticky-top, 2em);
	}
	:global(aside.toc.desktop ul) {
		font-size: 0.65rem;
	}

	h2,
	h3 {
		margin-bottom: 25px;
	}

	/* replace next line with appropriate CSS selector for all your headings */
	:where(h1, h2, h3, h4, h5, h6) {
		scroll-margin-top: 40px;
	}

	// main layout
	.main-layout {
		display: flex;
		margin: auto;
		justify-content: center;
		flex-direction: row; // row-reverse;
	}

	article {
		max-width: 790px;
		margin: 50px auto;
	}

	header {
		text-align: center;
		h2 {
			margin-top: unset;
			margin-bottom: unset;
		}
	}

	.image-block {
		margin: 1rem 0;
	}
	.image-source {
		font-size: 70%;
	}
</style>

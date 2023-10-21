<script>
const goodNews = [
    {
        'title':"Dank »Positivkreislauf«: Sonne soll noch vor 2050 zur wichtigsten Stromquelle werden",
        'link': 'https://www.spiegel.de/wissenschaft/technik/solarenergie-sonne-wird-laut-studie-vor-2050-zur-wichtigsten-stromquelle-a-7533e3e1-7a3d-4fe6-9ab2-9d03e8bb4c1d',
        'source': 'Spiegel Online',
        'date':'Oktober 2023'
    },
    {
        'title' : 'In Deutschland wurden bis September mehr Windräder gebaut als im gesamten Vorjahr.',
        'link' : 'https://taz.de/Ausbau-der-Windenergie/!5966101/',
        'source': 'taz',
        'date' : 'Oktober 2023'
    },
    {
        'title': 'Der beschleunigte Ausbau Erneuerbarer Energien zeigt nach Ansicht des Chefs der Energieagentur IEA, Fatih Birol, Wirkung: Die IEA sieht die Welt jetzt am Beginn des Endes des fossilen Zeitalters.',
        'link': 'https://www.tagesschau.de/wirtschaft/weltwirtschaft/fossile-brennstoffe-oel-kohle-gas-peak-nachfrage-erneuerbare-energien-klimawandel-iea-birol-100.html',
        'source' : 'tagesschau',
        'date': 'September 2023'
    },
    {
        'title': 'Die Treibhausgasemissionen sind in Österreich im Vorjahr im Vergleich zu 2021 um rund 6,4 Prozent gesunken. Das geht aus einer Schätzung des Umweltbundesamtes hervor, die am Donnerstag vorgestellt wurde. Die Emissionen lagen damit auf dem niedrigsten Wert seit Beginn der Berechnungen im Jahr 1990. Klimaministerin Leonore Gewessler zeigte sich erfreut, pochte aber auf weitere Maßnahmen',
        'link':'https://orf.at/stories/3327814/',
        'source' : 'orf.at',
        'date': 'August 2023'

    }
];

</script>

<ul class="list-disc">
    {#each goodNews as item (item.link)}
        <li class="text-sm">
            „{item.title}“
            (<a class="underline" target="_blank" href={item.link}>{item.source}</a>, {item.date})
        </li>
    {/each}
</ul>
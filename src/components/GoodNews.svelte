<script>
const goodNews = [
    {
        'title':"Dank »Positivkreislauf«: Sonne soll noch vor 2050 zur wichtigsten Stromquelle werden",
        'link': 'https://www.spiegel.de/wissenschaft/technik/solarenergie-sonne-wird-laut-studie-vor-2050-zur-wichtigsten-stromquelle-a-7533e3e1-7a3d-4fe6-9ab2-9d03e8bb4c1d',
        'sourceDate': 'Spiegel Online, Oktober 2023'
    },
    {
        'title' : 'In Deutschland wurden bis September mehr Windräder gebaut als im gesamten Vorjahr.',
        'link' : 'https://taz.de/Ausbau-der-Windenergie/!5966101/',
        'sourceDate' : 'taz, Oktober 2023'
    },
    {
        'title': 'Der beschleunigte Ausbau Erneuerbarer Energien zeigt nach Ansicht des Chefs der Energieagentur IEA, Fatih Birol, Wirkung: Die IEA sieht die Welt jetzt am Beginn des Endes des fossilen Zeitalters.',
        'link': 'https://www.tagesschau.de/wirtschaft/weltwirtschaft/fossile-brennstoffe-oel-kohle-gas-peak-nachfrage-erneuerbare-energien-klimawandel-iea-birol-100.html',
        'sourceDate' : 'tagesschau, September 2023'
    }
];

</script>

<ul class="list-disc">
    {#each goodNews as item (item.link)}
        <li class="text-sm">
        <a class="underline" target="_blank" href={item.link}>{item.title}</a> ({item.sourceDate})
        </li>
    {/each}
</ul>
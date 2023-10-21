<script>

const goodNews = [
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
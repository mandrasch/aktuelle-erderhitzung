<script>
  export let videoId;
  export let classWidth = "w-full";
  export let classHeight = "h-[500px]";
</script>

<div class="p-4 {classWidth} {classHeight}">
  <iframe
    class="rounded-xl bg-cyan-300"
    width="100%"
    height="100%"
    loading="lazy"
    data-src="https://www.youtube-nocookie.com/embed/{videoId}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</div>

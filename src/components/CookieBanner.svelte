<script>
  import { onMount } from "svelte";

  let showModal = false;

  const enableIframes = () => {
    const iframes = document.querySelectorAll("iframe[data-src]");
    iframes.forEach((iframe) => {
      iframe.src = iframe.getAttribute("data-src");
    });

    showModal = false;
  };

  onMount(() => {
    showModal = true;
    return;
  });
</script>

{#if showModal}
  <div class="modal-overlay">
    <div class="modal">
      <p class="p-6">
        Hi! Diese Webseite nutzt eingebette YouTube-Videos (<a
          class="underline"
          href="https://policies.google.com/privacy?hl=de"
          target="_blank">Datenschutz</a
        >).
      </p>
      <p>Ist das okay für dich?</p>
      <div class="w-full flex flex-col justify-center">
        <button
          on:click={enableIframes}
          class="mt-4 py-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Klar, Videos bitte laden 👍</button
        >
        <button class="mt-4 text-sm" on:click={() => (showModal = false)}
          >Nein, bitte ohne Videos anzeigen</button
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:3;
  }

  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
</style>

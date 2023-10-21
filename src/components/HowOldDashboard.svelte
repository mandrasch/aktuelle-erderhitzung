<script>

  import { onMount } from 'svelte';

  let birthYear = 2023; 
  let currentYear = new Date().getFullYear();
  let futureYears = [2027, 2042, 2100]; 

  function calculateAge(birthYear, futureYear) {
    if(isNaN(birthYear) || birthYear < 1900 || birthYear > 2100){
        return ""; 
    }

    const age = futureYear - birthYear;

    if(age < 0){
      return "-";
    }

    return  age + " Jahre";
  }

  function resetBirthYear(){
    birthYear = currentYear;
    const url = new URL(window.location);
    url.searchParams.delete('geburtsjahr')
    window.history.replaceState({}, '', url);
  }

   function updateBirthYearFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('geburtsjahr')) {
      birthYear = parseInt(urlParams.get('geburtsjahr'));
    }
  }

  function updateURLWithBirthYear() {
    /*const url = new URL(window.location);
    url.searchParams.set('geburtsjahr', birthYear.toString());
    window.history.replaceState({}, '', url);*/
  }

  onMount(() => {
    updateBirthYearFromURL();
  });
</script>


<div class="p-4 w-1/2 md:w-1/4">
  <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-orange-50 to-red-50 overflow-hidden p-6">
    <label for="birthYear" class="block tracking-widest text-xs title-font font-medium text-black-400 mb-1 "> Geburtsjahr eingeben: 
      
      {#if birthYear !== currentYear}
      <span role="button" tabindex="0" on:keypress={resetBirthYear} on:click={resetBirthYear}>X</span>
      {/if}
      
    </label>
    <input
      type="number"
      class="w-full p-2"
      bind:value={birthYear}
      on:change={updateURLWithBirthYear}
      placeholder="Geburtsjahr eingeben"
    />
  </div>
</div>
<div class="p-4  w-1/2 md:w-1/4">
  <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-orange-50 to-red-50 overflow-hidden p-6">
  <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1">Alter bei +1,5°C (2027)</div>
  <span  class="text-xl">{calculateAge(birthYear, 2027)}&nbsp;</span>
</div>
</div>
<div class="p-4  w-1/2 md:w-1/4">
  <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-orange-50 to-red-50 overflow-hidden p-6">
  <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1">Alter bei +2°C (2042)</div>
  <span  class="text-xl">{calculateAge(birthYear, 2042)}&nbsp;</span>
</div>
  
</div>
<div class="p-4  w-1/2 md:w-1/4">
  <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-orange-50 to-red-50 overflow-hidden p-6">
  <div class="tracking-widest text-xs title-font font-medium text-black-400 mb-1">Alter bei +2,8°C (2100)</div>
  <span  class="text-xl">{calculateAge(birthYear, 2100)}&nbsp;</span>
  </div>
</div>



<script>
  let birthYear = 2023; // This is an example birth year; you can change it as needed
  let currentYear = new Date().getFullYear(); // Current year
  let futureYears = [2027, 2042, 2100]; // Years for which we want to calculate age

  // Function to calculate age
  function calculateAge(birthYear, futureYear) {
    if(isNaN(birthYear) || birthYear < 1900){
        return " "; 
    }

    return futureYear - birthYear + " Jahre";
  } 
</script>

<div class="w-full">
  <label for="birthYear" class="block font-medium">Geburtsjahr</label>
  <input
    type="number"
    class="w-full p-2"
    bind:value={birthYear}
    placeholder="Geburtsjahr eingeben"
  />
</div>

<div class="flex flex-col gap-4 w-full mt-2">
  <div class="w-full">
    <div class="bg-gray-200 p-4 rounded-md">
      <h2  class="text-sm font-medium mb-2">Alter bei +1,5°C (2027):</h2>
      <span  class="text-xl">{calculateAge(birthYear, 2027)}&nbsp;</span>
    </div>
  </div>
  <div class="w-full">
    <div class="bg-gray-200 p-4 rounded-md">
      <h2 class="text-sm font-medium mb-2">Alter bei +2°C (2042):</h2>
      <span class="text-xl">{calculateAge(birthYear, 2042)}&nbsp;</span>
    </div>
  </div>
  <div class="w-full">
    <div class="bg-gray-200 p-4 rounded-md">
      <h2 class="text-sm font-medium mb-2">Alter bei +2,8°C (2100):</h2>
      <span class="text-xl">{calculateAge(birthYear, 2100)}&nbsp;</span>
    </div>
  </div>
</div>

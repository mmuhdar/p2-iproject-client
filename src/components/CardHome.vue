<template>
  <div class="p-2 bg-primary rounded-md">
    <img
      src="https://cdn.myanimelist.net/images/anime/1426/111248.jpg?s=8abf35da87707ea81557e0287f88eb76"
      alt="barakamon"
    />
    <div class="flex justify-between items-center mt-1">
      <p class="text-white text-lg">Barakamon</p>
      <span class="flex justify-center bg-main rounded-xl w-1/4 text-secondary"
        >TV</span
      >
    </div>
    <p class="text-white text-sm">12 Episodes</p>
    <div class="flex gap-1 mt-2">
      <button
        class="bg-main hover:bg-main-600 text-secondary rounded-lg w-full"
      >
        Edit
      </button>
      <button
        class="bg-orange hover:bg-orange-600 text-white rounded-lg w-full"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHome",
};
</script>

<style></style>

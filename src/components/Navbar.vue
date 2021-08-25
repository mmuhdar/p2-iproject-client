<template>
  <div class="h-full w-full mt-5">
    <div class="px-10 flex flex-row justify-between text-white">
      <i class="hover:text-main cursor-pointer font-bold text-3xl">H-NIME</i>
      <div class="flex flex-row justify-between items-center">
        <button
          class="
            border-2 border-main
            rounded-md
            focus:bg-main focus:text-secondary
            px-1
            mr-2
          "
        >
          Home
        </button>
        <button
          class="
            border-2 border-main
            rounded-md
            focus:bg-main focus:text-secondary
            px-1
            mr-2
          "
        >
          Add Anime
        </button>
        <button
          class="
            border-2 border-main
            rounded-md
            focus:bg-main focus:text-secondary
            px-1
            mr-2
          "
        >
          Add Episode
        </button>
        <button
          class="
            border-2 border-orange
            rounded-md
            focus:bg-orange focus:text-white
            px-1
            mr-2
          "
        >
          logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

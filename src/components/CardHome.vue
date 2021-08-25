<template>
  <div class="p-2 bg-primary rounded-md flex flex-col justify-between">
    <router-link :to="link">
      <div>
        <img
          :src="anime.image_url"
          :alt="anime.title"
          class="h-80 w-full rounded-lg z-0"
        />
      </div>
    </router-link>
    <div class="p-1">
      <p class="text-white text-md">{{ anime.title }}</p>
      <p class="text-white text-sm">{{ anime.episodes }} Episodes</p>
    </div>
    <div class="flex gap-1 p-1">
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
  data() {
    return {
      link: `/animes/${this.anime.id}`,
    };
  },
  props: ["anime"],
};
</script>

<style></style>

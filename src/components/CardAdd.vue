<template>
  <div class="p-2 bg-primary rounded-md flex flex-col justify-between">
    <div>
      <img
        :src="anime.image_url"
        :alt="anime.title"
        class="h-80 w-full rounded-lg z-0"
      />
    </div>
    <div class="p-1">
      <p class="text-white text-md">{{ anime.title }}</p>
      <p class="text-white text-sm">{{ anime.episodes }} Episodes</p>
    </div>
    <div class="flex">
      <button
        class="bg-main hover:bg-main-600 text-secondary rounded-lg w-full"
        @click="postAnime"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAdd",
  props: ["anime"],
  methods: {
    postAnime() {
      const data = this.anime;
      this.$store.dispatch("postAnime", data);
    },
  },
};
</script>

<style></style>

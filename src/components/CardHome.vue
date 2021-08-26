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
    <router-link :to="linkAdd">
      <div class="flex">
        <button
          class="bg-main hover:bg-main-600 text-secondary rounded-lg w-full"
          v-show="isAdmin"
        >
          Add Episode
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardHome",
  data() {
    return {
      link: `/animes/${this.anime.id}`,
      linkAdd: `/add-episode/${this.anime.id}`,
      isAdmin: false,
    };
  },
  props: ["anime"],
  created() {
    if (this.$store.state.role == "admin") {
      this.isAdmin = true;
    }
  },
};
</script>

<style></style>

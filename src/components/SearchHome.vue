<template>
  <div class="flex justify-end mt-5 px-10">
    <form @submit.prevent="searchAnime">
      <div class="flex gap-1">
        <input
          type="text"
          placeholder="One Piece"
          class="
            h-8
            bg-secondary
            focus:outline-none focus:ring-2 focus:ring-main-700
            text-white
            rounded-lg
            px-5
          "
          v-model="search"
        />
        <button
          type="submit"
          class="px-2 bg-secondary text-white rounded-lg hover:bg-primary"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchHome",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchAnime() {
      const data = {
        page: 1,
        title: this.search,
      };
      this.$store.dispatch("getHomeAnimes", data);
    },
  },
};
</script>

<style></style>

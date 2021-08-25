<template>
  <div class="px-10">
    <form @submit.prevent="searchAnime">
      <div class="flex gap-1 mt-10">
        <input
          type="text"
          placeholder="Type title here"
          class="
            h-12
            bg-secondary
            focus:outline-none focus:ring-2 focus:ring-main-700
            text-white
            rounded-lg
            px-5
            w-full
          "
          v-model="title"
        />
        <button
          type="submit"
          class="px-2 bg-secondary text-white rounded-lg hover:bg-primary"
        >
          Search
        </button>
      </div>
    </form>
    <div class="grid grid-cols-6 gap-4 mt-5">
      <card-add v-for="anime in animes" :key="anime.id" :anime="anime" />
    </div>
  </div>
</template>

<script>
import CardAdd from "../components/CardAdd.vue";
export default {
  name: "AddAnime",
  data() {
    return {
      title: "",
    };
  },
  components: {
    CardAdd,
  },
  methods: {
    searchAnime() {
      this.$store.dispatch("searchAnime", { title: this.title });
    },
  },
  computed: {
    animes() {
      return this.$store.state.jikanAnime;
    },
  },
};
</script>

<style></style>

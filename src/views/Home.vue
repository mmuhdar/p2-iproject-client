<template>
  <div>
    <search-home />
    <div class="grid grid-cols-6 gap-4 px-10 mt-5">
      <card-home
        v-for="anime in homeAnimes.animes"
        :key="anime.id"
        :anime="anime"
      />
    </div>
    <div class="flex justify-center mt-5">
      <t-pagination
        v-model="homeAnimes.currentPage"
        :per-page="perPage"
        :limit="limit"
        :total-items="homeAnimes.totalItems"
        variant="rounded"
        @input="pagination"
      />
    </div>
  </div>
</template>

<script>
import CardHome from "../components/CardHome.vue";
import SearchHome from "../components/SearchHome.vue";
export default {
  name: "Home",
  data() {
    return {
      perPage: 12,
      limit: 6,
    };
  },
  components: {
    CardHome,
    SearchHome,
  },
  methods: {
    pagination() {
      this.$store.dispatch("getHomeAnimes", {
        page: this.homeAnimes.currentPage,
      });
    },
  },
  computed: {
    homeAnimes() {
      return this.$store.state.homeAnimes;
    },
  },
  created: function () {
    this.$store.dispatch("getHomeAnimes", { page: 1 });
  },
};
</script>

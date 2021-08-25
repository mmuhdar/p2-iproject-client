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
import SearchHome from "../components/SearchHome.vue";
export default {
  name: "AddEpisode",
  components: {
    SearchHome,
  },
};
</script>

<style></style>

<template>
  <div class="px-10 mt-5">
    <div class="flex gap-4">
      <div class="flex items-center w-full bg-primary p-2 rounded-xl">
        <div class="flex">
          <img :src="anime.image_url" :alt="anime.title" />
          <div class="flex flex-col ml-4 gap-4">
            <div>
              <p class="text-3xl text-white">{{ anime.title }}</p>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="episode in anime.Episodes"
                :key="episode.id"
                @click="setLink(episode.videoUrl)"
                class="bg-orange text-white rounded-lg p-2 focus:bg-orange-700"
              >
                {{ episode.title }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <LazyYoutube
          ref="youtubeLazyVideo"
          :src="link"
          max-width="720px"
          aspect-ratio="16:9"
          thumbnail-quality="standard"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnimeDetail",
  data() {
    return {
      link: "https://www.youtube.com/watch?v=CpPT2hHnZls",
    };
  },
  methods: {
    setLink(url) {
      this.link = url;
    },
  },
  computed: {
    anime() {
      return this.$store.state.animeDetail;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getAnime", { id });
  },
};
</script>

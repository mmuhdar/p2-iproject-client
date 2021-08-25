<template>
  <div class="bg-primary rounded-lg w-1/3 mx-auto">
    <div class="flex flex-row justify-evenly gap-2">
      <img :src="anime.image_url" :alt="anime.title" class="rounded-lg" />
      <div class="flex flex-col">
        <p class="text-white text-2xl">{{ anime.title }}</p>
        <div class="mt-8">
          <form
            class="flex flex-col"
            autocomplete="off"
            @submit.prevent="addEpisode"
          >
            <div class="pt-3 rounded">
              <label class="block text-md mb-2 text-white">Title</label>
              <input
                v-model="title"
                type="text"
                class="
                  bg-secondary
                  border-b-4 border-gray-500
                  focus:border-main
                  text-white
                  rounded
                  w-full
                  focus:outline-none
                  shadow-2xl
                  transition
                  duration-500
                "
              />
            </div>
            <div class="pt-3 rounded">
              <label class="block text-md mb-2 text-white">Url Video</label>
              <input
                v-model="url"
                type="text"
                name="password"
                class="
                  bg-secondary
                  border-b-4 border-gray-500
                  focus:border-main
                  text-white
                  rounded
                  w-full
                  focus:outline-none
                  shadow-2xl
                  transition
                  duration-500
                "
              />
            </div>
            <button
              class="
                mt-5
                h-10
                border-2 border-main-600
                rounded-lg
                text-main-600
                hover:bg-main-600 hover:text-white
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEpisode",
  data() {
    return {
      title: "",
      url: "",
    };
  },
  methods: {
    addEpisode() {
      const data = {
        title: this.title,
        url: this.url,
        animeId: this.anime.id,
      };
      this.$store.dispatch("addEpisode", data);
    },
  },
  computed: {
    anime() {
      return this.$store.state.animeDetail;
    },
  },
  created() {
    this.$store.dispatch("getAnime", { id: this.$route.params.id });
  },
};
</script>

<style></style>

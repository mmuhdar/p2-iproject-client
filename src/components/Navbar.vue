<template>
  <div class="h-full w-full mt-5">
    <div class="px-10 flex flex-row justify-between text-white">
      <router-link to="/">
        <i class="hover:text-main cursor-pointer font-bold text-3xl">H-NIME</i>
      </router-link>
      <div class="flex flex-row justify-between items-center">
        <router-link to="/add-anime">
          <button
            class="
              border-2 border-main
              rounded-md
              focus:bg-main focus:text-secondary
              px-1
              mr-2
            "
            v-show="role == 'admin'"
          >
            Add Anime
          </button>
        </router-link>
        <button
          class="
            border-2 border-main
            rounded-md
            focus:bg-main focus:text-secondary
            px-1
            mr-2
          "
          v-show="isLogin"
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
          v-show="isLogin"
          @click="logOutHandler"
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
  props: ["isLogin", "role"],
  methods: {
    logOutHandler() {
      this.$store.commit("SET_IS_LOGIN", { isLogin: false, role: "" });
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

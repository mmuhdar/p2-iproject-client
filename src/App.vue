<template>
  <div id="app">
    <div id="nav">
      <Navbar :isLogin="isLogin" :role="role" />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    role() {
      return this.$store.state.role;
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_IS_LOGIN", { isLogin: true });
    }
  },
};
</script>

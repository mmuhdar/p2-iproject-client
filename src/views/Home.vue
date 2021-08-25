<template>
  <div class="grid grid-cols-6 gap-4 px-10 mt-10">
    <card-home v-for="n in 12" :key="n" />
  </div>
</template>

<script>
import CardHome from "../components/CardHome.vue";
export default {
  name: "Home",
  components: {
    CardHome,
  },
};
</script>

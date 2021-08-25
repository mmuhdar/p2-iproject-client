import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AnimeDetail from "../views/AnimeDetail.vue";
import AddAnime from "../views/AddAnime.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/animes/:id",
    name: "AnimeDetail",
    component: AnimeDetail,
  },
  {
    path: "/add-anime",
    name: "AddAnime",
    component: AddAnime,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

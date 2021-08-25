import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AnimeDetail from "../views/AnimeDetail.vue";
import AddAnime from "../views/AddAnime.vue";
import Login from "../views/Login.vue";
import AddEpisode from "../views/AddEpisode.vue";

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
  {
    path: "/add-episode/:id",
    name: "AddEpisode",
    component: AddEpisode,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  switch (to.name) {
    case "Login":
      token ? next({ name: "Home" }) : next();
      break;
    case "Register":
      token ? next({ name: "Home" }) : next();
      break;
    case "Home":
      !token ? next({ name: "Login" }) : next();
      break;
    case "AnimeDetail":
      !token ? next({ name: "Login" }) : next();
      break;
    case "AddAnime":
      !token ? next({ name: "Login" }) : next();
      break;
    case "AddEpisode":
      !token ? next({ name: "Login" }) : next();
      break;
    default:
      next();
      break;
  }
});

export default router;

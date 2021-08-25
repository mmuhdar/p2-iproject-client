import Vue from "vue";
import Vuex from "vuex";
import instance from "../apis/api";
import router from "../router";
import vue from "../main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeAnimes: [],
    animeDetail: {},
    jikanAnime: [],
    isLogin: false,
    role: "",
  },
  mutations: {
    SET_HOME_ANIMES(state, payload) {
      state.homeAnimes = payload.data;
    },
    SET_ANIME_DETAIL(state, payload) {
      state.animeDetail = payload.data;
    },
    SET_JIKAN_ANIME(state, payload) {
      state.jikanAnime = payload.data;
    },
    SET_IS_LOGIN(state, { isLogin, role }) {
      state.isLogin = isLogin;
      state.role = role;
    },
  },
  actions: {
    async getHomeAnimes(context, payload) {
      try {
        const { page, title } = payload;
        if (!title) {
          const { data } = await instance.get("/animes", {
            params: {
              page,
            },
          });
          context.commit("SET_HOME_ANIMES", { data });
        } else if (title) {
          const { data } = await instance.get("/animes", {
            params: {
              page,
              title,
            },
          });
          context.commit("SET_HOME_ANIMES", { data });
        }
      } catch (err) {
        console.log(err.response);
      }
    },

    async getAnime(context, payload) {
      try {
        const { id } = payload;
        const { data } = await instance.get(`/animes/${id}`);
        context.commit("SET_ANIME_DETAIL", { data });
      } catch (err) {
        console.log(err);
      }
    },

    async searchAnime(context, payload) {
      try {
        const { title } = payload;
        const { data } = await instance.get("/animes/search", {
          params: {
            title,
          },
        });
        context.commit("SET_JIKAN_ANIME", { data });
      } catch (err) {
        console.log(err);
      }
    },

    async postAnime(context, payload) {
      try {
        const { mal_id, title, type, episodes, image_url } = payload;
        await instance.post(`/animes/${mal_id}`, {
          title,
          image_url,
          type,
          episodes,
        });
        router.push({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    },

    async login(context, payload) {
      try {
        const { password, email } = payload;
        const { data } = await instance.post("/login", {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        context.commit("SET_IS_LOGIN", { isLogin: true, role: data.role });
        router.push({ name: "Home" });
        vue.$toast.success(`Login Success`);
      } catch (err) {
        vue.$toast.error(`Email/password invalid`);
      }
    },
  },
  modules: {},
});

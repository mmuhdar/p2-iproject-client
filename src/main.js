import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VueTailwind from "vue-tailwind";
import paginationSetting from "./settings/pagination";
import LazyTube from "vue-lazytube";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import toastSetting from "./settings/toast";

Vue.use(Toast, toastSetting);
Vue.use(LazyTube);
Vue.use(VueTailwind, paginationSetting);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default Vue;

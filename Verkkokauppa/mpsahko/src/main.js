import Vue from "vue";
import router from "./router";
import store from './store';
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import axios from 'axios';
import VueCookies from 'vue-cookies'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.prototype.$http = axios;

Vue.use(BootstrapVue);
Vue.use(VueCookies)

VueCookies.config('7d')
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
import Etusivu from "./components/Sivut/Etusivu.vue";
import Otayhteytta from "./components/Sivut/Otayhteytta.vue";
import Verkkokauppa from "./components/Sivut/Verkkokauppa.vue";
import Tietosyotto from "./components/Sivut/Tietosyotto.vue";
import Checkout from "./components/Sivut/Checkout.vue";
import Success from "./components/Sivut/Success.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Etusivu },
  { path: "/Verkkokauppa", component: Verkkokauppa },
  {path: "/checkout", component: Checkout},
  {path:"/Otayhteytta",component: Otayhteytta},
  {path:"/Tietosyotto",component: Tietosyotto},
  {path:"/Success",component: Success},
];

const router = new Router({
  routes
});

export default router;

<template>
  <div id="app">
    <core-navbar/>

    <router-view/>

    <!--<core-footer/>-->
  </div>
  
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CoreNavbar from './components/core/Navbar.vue'
import CoreFooter from './components/core/Footer.vue'

export default {
  name: 'app',
  components: {
    
    CoreNavbar,
    CoreFooter
  },
  computed: mapState(["inCart"]),

  methods: {
...mapMutations(["SET_CART_PRODUCTS"]),
    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem("mpsahko-cart"));
      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },
  },
  created() {
    this.getLocalProducts();
  }
}
</script>

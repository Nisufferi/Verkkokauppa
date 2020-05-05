import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Testituotteita 4kpl
    products: [],
    // Taulukko ostoskorissa oleville tuotteille
    inCart: []
  },
  getters: {
    // Getterit molemmille taulukoille, tuotteille ja korissa oleville romuille
    products: state => state.products,
    inCart: state => state.inCart
  },
  mutations: {
    // Muuttaa statea, eli lisää stateen tuotteen
    /*ADD_TO_CART(state, TUOTENIMIKEID) {
      console.log(TUOTENIMIKEID)
      state.inCart.push(TUOTENIMIKEID);
      this.$cookies.set(TUOTENIMIKEID, TUOTENIMIKEID);
    },*/

    ADD_CART_LOCAL: (state, TUOTENIMIKEID) => {
      state.inCart.push(TUOTENIMIKEID);
      localStorage.setItem("mpsahko-cart", JSON.stringify(state.inCart));
    },

    SET_CART_PRODUCTS: (state, products) => {
      state.inCart = [];
      state.inCart = products;
    },

    REMOVE_FROM_CART(state, index) {
      state.inCart.splice(index, 1);
    },

    TUOTTEET_STATEEN(state, data) {
      for (var i = 0; i < data.length; i++) {
        state.products.push(data[i]);
      }
    }
    
  },
  actions: {
    // Suorittuu kun buttonia painetaan tuotekortissa
    addToCart(context, TUOTENIMIKEID) {
      context.commit("ADD_CART_LOCAL", TUOTENIMIKEID);
    },
    removeFromCart(context, index) {
      context.commit("REMOVE_FROM_CART", index);
    }
  }
});

<template>
  <div>
    <b-button v-b-modal.ostoskori>Ostoskori ({{ numInCart }})</b-button>
    <b-modal id="ostoskori" hide-footer scrollable title="Ostoskori">
      <table class="table">
        <tbody>
          <tr v-for="(item, index) in cart">
            <td>{{ item.TUOTENIMIKE }}</td>
            <td>{{ item.HINTA }} €</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
            </td>
          </tr>
          <tr>
            <th></th>
            <th>Summa: {{ total }} €</th>
            <th></th>
          </tr>
        </tbody>
      </table>

      <b-button href="/#/checkout">Kassalle</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Ostoskori",
  computed: {
    cart() {
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.products.find(forSaleItem => {
          return cartItem === forSaleItem.TUOTENIMIKEID;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.HINTA, 0);
    },

    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    }
  },

  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
      var getCart = localStorage.getItem("mpsahko-cart");
      var getCartArr = JSON.parse(getCart);
      getCartArr.splice(index, 1);
      localStorage.setItem("mpsahko-cart", JSON.stringify(getCartArr));
    }
  }
};
</script>


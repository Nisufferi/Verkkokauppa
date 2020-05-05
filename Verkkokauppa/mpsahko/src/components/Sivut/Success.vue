<template>
  <div class="container mt-3">
    <h1>Kiitos tilauksestasi!</h1>
    <br>
    <b-card title="Yhteystiedot">
      <p class="font-weight-bold">Sähköposti: {{sposti}}</p>
      <p class="font-weight-bold">Etunimi: {{etunimi}}</p>
      <p class="font-weight-bold">Sukunimi: {{sukunimi}}</p>
      <p class="font-weight-bold">Osoite: {{osoite}}</p>
      <p class="font-weight-bold">Postinumero: {{postinumero}}</p>
      <p class="font-weight-bold">Postitoimipaikka: {{postitoimipaikka}}</p>
    </b-card>

    <div id="orderedProducts" class="mt-3">
      <h4>Tilaamasi tuotteet:</h4>
      <b-list-group>
        <b-list-group-item v-for="(item, index) in cart">
          <td>{{ item.TUOTENIMIKE }}</td>
          <td>{{ item.HINTA }} €</td>
        </b-list-group-item>
        <b-list-group-item class="font-weight-bold">Tilauksen loppusumma: {{ total }}€</b-list-group-item>
        
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sposti: "",
      etunimi: "",
      sukunimi: "",
      osoite: "",
      postinumero: "",
      postitoimipaikka: ""
    };
  },
  methods: {},
  created: function() {
    this.getStorage;
  },
  computed: {
    getStorage: function() {
      this.sposti = localStorage.getItem("sposti"),
      this.etunimi = localStorage.getItem("etunimi"),
      this.sukunimi = localStorage.getItem("sukunimi"),
      this.osoite = localStorage.getItem("osoite"),
      this.postinumero = localStorage.getItem("postinumero"),
      this.postitoimipaikka = localStorage.getItem("postitoimipaikka")
    },
    cart() {
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.products.find(forSaleItem => {
          return cartItem === forSaleItem.TUOTENIMIKEID;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.HINTA, 0);
    }
  }
};
</script>

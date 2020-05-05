<template>
  <div id="verkkokauppa" class="container my-5">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>Verkkokauppa</h1>
      </div>
      <div class="col-md-3">
        <Ostoskori/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 mb-3">
        <label for="filterPrdCty">Kategoria:</label>
        <select class="form-control" id="filterPrdCty" v-model="selectedCategory">
          <option value="Kaikki">Kaikki</option>
          <option value="ASTIANPESUKONEET">Astianpesukoneet</option>
          <option value="JÄÄKAAPIT">Jääkaapit</option>
          <option value="PAKASTIMET">Pakastimet</option>
          <option value="LIEDET JA UUNIT">Liedet ja uunit</option>
          <option value="LIESITUULETTIMET">Liesituulettimet</option>
          <option value="PESUKONEET">Pyykinpesukoneet</option>
          <option value="KUIVAUSRUMMUT">Kuivausrummut</option>
          <option value="MIKROAALTOUUNIT">Mikroaaltouunit</option>
          <option value="KODINKONETARVIKKEET">Tarvikkeet</option>
        </select>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="row">
      <div class="col-md-6" v-for="tuote in tuotteet1">
        <Item
          v-bind:key="tuote.TUOTENIMIKEID"
          v-bind:TUOTENIMIKEID="tuote.TUOTENIMIKEID"
          v-bind:TUOTENIMIKE="tuote.TUOTENIMIKE"
          v-bind:HINTA="tuote.HINTA"
          v-bind:VALMISTAJA_KOODI="tuote.VALMISTAJA_KOODI"
          v-bind:WWW_OSOITE="tuote.WWW_OSOITE"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../core/Tuote.vue";
import Ostoskori from "../core/Ostoskori.vue";
export default {
  name: "app",
  computed: {
    // Nappaa products-getterin $storesta
    products() {
      return this.$store.getters.products;
    },
    // Nappaa inCart-getterin $storesta
    inCart() {
      return this.$store.getters.inCart;
    },
    cart() {
      return this.$store.getters.inCart.map(cartItem => {
        return this.$store.getters.products.find(forSaleItem => {
          return cartItem === forSaleItem.TUOTENIMIKEID;
        });
      });
    }
  },
  components: {
    Item,
    Ostoskori
  },
  data() {
    return {
      data2: [],
      options: [
        { text: "Kaikki", value: "Kaikki" },
        { text: "Astianpesukoneet", value: "ASTIANPESUKONEET" },
        { text: "Jääkaapit", value: "JÄÄKAAPIT" },
        { text: "Pakastimet", value: "PAKASTIMET" },
        { text: "Liedet ja uunit", value: "LIEDET JA UUNIT" },
        { text: "Liesituulettimet", value: "LIESITUULETTIMET" },
        { text: "Pyykinpesukoneet", value: "PESUKONEET" },
        { text: "Kuivausrummut", value: "KUIVAUSRUMMUT" },
        { text: "Mikroaaltouunit", value: "MIKROAALTOUUNIT" },
        { text: "Tarvikkeet", value: "KODINKONETARVIKKEET" }
      ],
      selectedCategory: "Kaikki"
    };
  },
  created: function() {
    this.tuotteet;
  },
  computed: {
    tuotteet1: function() {
      var vm = this;
      var TUOTERYHMÄ = vm.selectedCategory;

      if (TUOTERYHMÄ === "Kaikki") {
        return vm.$store.getters.products;
      } else {
        return vm.$store.getters.products.filter(function(tuote) {
          return tuote.TUOTERYHMÄ === TUOTERYHMÄ;
        });
      }
    },
    tuotteet: async function() {
      var data1;
      await this.$http
        .get("http://18.195.206.161:8081/laitteet")
        .then(function(response) {
          console.log(response);
          data1 = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      this.data2 = data1;

      this.$store.commit("TUOTTEET_STATEEN", this.data2);
    }
  }
};
</script>

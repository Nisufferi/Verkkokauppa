<template>
  <div class="cardTemplate">
    <div class="card mb-4 shadow-sm">
      <b-alert
        :show="dismissCountDown"
        variant="success"
        @dismissed="dismissCountDown=0"
      >Tuote lisätty koriin!</b-alert>
      <img
        class="card-img-top mt-2"
        :src="kuva"
        alt=""
        
        style="height: 150px; width: 127.135px;margin: auto"
      >
      <div class="card-body">
        <h6 class="card-text">{{ TUOTENIMIKE }}</h6>
        <h5 class="card-text">{{ HINTA }} €</h5>
        <h6>{{ WWW_OSOITE }}</h6>
        <p class="card-text">
          Valmistajan kotisivu:
          <a
            :href="'https://www.gram.fi/tuotteet/' + valmistaja"
          >https://www.gram.fi/tuotteet/{{valmistaja}}</a>
        </p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group"></div>
          <div>
            <b-button @click="addToCart">Lisää ostoskoriin</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tuote",
  data() {
    return {
      valmistaja: this.VALMISTAJA_KOODI.replace(/ /g, "-"),
      dismissSecs: 3,
      dismissCountDown: 0,
      kuva: require("../../assets/" + this.VALMISTAJA_KOODI + ".jpg")
    };
  },
  props: {
    TUOTENIMIKEID: Number,
    TUOTENIMIKE: String,
    HINTA: Number,
    TUOTERYHMÄ: String,
    VALMISTAJA_KOODI: String,
    WWW_OSOITE: String
  },
  methods: {
    // Suorittuu buttonia painettaessa, dispatch suorittaa addToCart -actionin (löytyy store.js)
    addToCart() {
      this.dismissCountDown = this.dismissSecs;
      this.$store.dispatch("addToCart", this.TUOTENIMIKEID);
    },
    kuvat(){
      return require('../../assets/' + kuvaei + '.png');
    }
  }
};
</script>
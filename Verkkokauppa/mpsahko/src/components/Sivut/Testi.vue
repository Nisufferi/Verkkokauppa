<template>
  <div id="testi">
    <b-form-input v-model="osoite" placeholder="Syötä TUOTENIMIKEID, 11 numeroa pitkä."></b-form-input>
    <div class="mt-3">
      WWW-osoite:
      <strong>{{ osoite }}</strong>
    </div>

    <input type="button" @click="createLaite" value="Lähetä">
  </div>
</template>


<script>
export default {
  data() {
    return {
      osoite: null
    };
  },

  methods: {
    // Lähetetään ylempänä olevan input-kentän sisältö menemään POST:lla tuohon localhost:8081/laite_create routeen
    createLaite() {
      const axios = require("axios");

      axios
        .post("http://18.195.206.161:8081/laite_create", {
          osoite: this.osoite
        })
        .then(res => {
          console.log(`statusCode: ${res.status}`);
          console.log(res);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>



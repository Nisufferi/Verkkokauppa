<template>
  <div id="Tietosyotto">
    <b-form-input v-model="laiteid" placeholder="TUOTEKOODI"></b-form-input>
    <b-form-input v-model="myyntihinta" placeholder="MYYNTIHINTA"></b-form-input>
    <b-form-input v-model="osoite" placeholder="TUOTTEEN KUVA"></b-form-input>


    <input type="button" @click="createLaite" value="Lähetä">
  </div>
</template>


<script>
export default {
  data() {
    return {
      osoite: null,
      laitteet: []
    };
  },

  methods: {
    // Lähetetään ylempänä olevan input-kentän sisältö menemään POST:lla tuohon localhost:8081/laite_create routeen
    createLaite() {
      const axios = require("axios");

      axios
        .post("http://18.195.206.161:8081/laite_create", {
          osoite: this.osoite,
          laiteid: this.laiteid,
          myyntihinta: this.myyntihinta
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



<template>
  <div class="container mt-3">
    <h4>Tilaajan yhteystiedot</h4>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group>
        <b-form-input v-model="etunimi" placeholder="Etunimi"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="sukunimi" placeholder="Sukunimi"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="sposti" placeholder="Sähköpostiosoite"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="osoite" placeholder="Osoite"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="postinumero" placeholder="Postinumero"></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="postitoimipaikka" placeholder="Postitoimipaikka"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Siirry maksamaan</b-button>
      <b-button type="reset" variant="danger">Tyhjennä</b-button>
    </b-form>

    <form action="https://payment.paytrail.com/e2" method="post">
      <input name="MERCHANT_ID" type="hidden" value="13466">

      <input name="URL_SUCCESS" type="hidden" value="http://18.195.206.161/#/success">
      <input name="URL_CANCEL" type="hidden" value="http://18.195.206.161/#/cancel">

      <input name="ORDER_NUMBER" type="hidden" value="123456">
      <input
        name="PARAMS_IN"
        type="hidden"
        value="MERCHANT_ID,URL_SUCCESS,URL_CANCEL,ORDER_NUMBER,PARAMS_IN,PARAMS_OUT,AMOUNT"
      >
      <input name="PARAMS_OUT" type="hidden" value="PAYMENT_ID,TIMESTAMP,STATUS">
      <input name="AMOUNT" type="hidden" value="350.00">
      <input
        name="AUTHCODE"
        type="hidden"
        value="1AFECB9123A4C49134ABE8AB8EA8B981CFE5299B54327D0562D958897745A77F"
      >
      <input type="submit" value="Pay here">
    </form>
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
      postitoimipaikka: "",
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      localStorage.setItem("sposti", this.sposti);
      localStorage.setItem("etunimi", this.etunimi);
      localStorage.setItem("sukunimi", this.sukunimi);
      localStorage.setItem("osoite", this.osoite);
      localStorage.setItem("postinumero", this.postinumero);
      localStorage.setItem("postitoimipaikka", this.postitoimipaikka);

      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
      this.etunimi = "";
      this.osoite = "";
      this.sukunimi = "";
      this.sposti = "";
      this.osoite = "";
      this.postinumero = "";
      this.postitoimipaikka = "";
      this.$nextTick(() => {
        this.show = true;
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.HINTA, 0);
    }
  }
};
</script>
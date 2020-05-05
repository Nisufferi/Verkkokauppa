<template>
<div id="etusivu">
<header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
        <h1 class="masthead-heading mb-0">Kinnulan MP-Sähkö</h1>
        <b-button variant="primary" href="/#/verkkokauppa">Tästä verkkokauppaan!</b-button>
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
  </header>

    <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid" src="@/assets/photo1.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Kinnulan MP-Sähkö Ky</h2>
            <p>Olemme Kinnulassa sijaitseva sähkö- ja LVI-alan yritys. Palvelemme yksityisiä, yrityksiä ja taloyhtiöitä Kinnulan, Pihtiputaan, Kivijärven ja koko Keski-Suomen alueella, tarvittaessa tulemme kauemmaskin. Yhteistyökumppaneidemme avulla onnistuu myös remontteihin liittyvät työt. Tukkuliikkeinämme toimivat: Gram, SLO ja Onninen.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="palvelut">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="p-5">
            <img class="img-fluid" src="@/assets/photo2.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-5">
            <h2 class="display-4">Sähkötyöt</h2>
            <p>Kinnulan MP-Sähkö Ky toteuttaa monipuoliset sähköasennukset Kinnulan, Kivijärven, Pihtiputaan ja Keski-Suomen alueella.

Tarjoamme ammattitaitoista sähköalan osaamista niin yrityksille, taloyhtiöille kuin yksityishenkilöille. Meiltä saat kokonaisvaltaista sähköurakointipalvelua, sekä pienimuotoiset sähköasennustyöt. Toimimme pääasiassa Kinnulassa ja ympäristökunnissa, mutta tarvittaessa työskentelemme muuallakin Keski-Suomessa.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid" src="@/assets/photo3.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Putkityöt</h2>
            <p>Kinnulan MP-Sähkö Ky tekee LVI-työt ja putkiremontit Kinnulassa, Kivijärvellä, Pihtiputaalla ja koko Keski-suomessa.

               Olemme Kinnulasta käsin toimiva LVI-alan ammattilainen. Teemme kaikenlaiset putkiasennukset niin yrityksille, taloyhtiöille kuin yksityisillekin. Hoidamme pikkuhommat kuten hananvaihdot ja pesukoneiden kytkennät siinä kuin isommatkin asennus- ja korjaustyöt. Olemme luotettava yhteistyökumppani, kun tarvitset LVI-alan osaajaa.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-5 bg-black">
    <div class="container">
      <p class="m-0 text-center text-white small">Copyright &copy; Your Website 2019</p>
    </div>
    <!-- /.container -->
  </footer>


</div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
#team {
  padding: 2rem;
}
.btn-xl {
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}
.bg-black {
  background-color: #000 !important;
}
.rounded-pill {
  border-radius: 5rem;
}
.navbar-custom {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
}
.navbar-custom .navbar-brand {
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
}
.navbar-custom .navbar-nav .nav-item .nav-link {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
}
header.masthead {
  position: relative;
  overflow: hidden;
  padding-top: calc(7rem + 72px);
  padding-bottom: 7rem;
  background: url("https://raw.githubusercontent.com/janispetke3/Verkkokauppa/Hiekkalaatikko/mpsahko/src/assets/img/banner1.jpeg?token=AkmbJR-7CCC2eG5gVevl9Ryy8NGZFYmzks5cuJ3jwA%3D%3D");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
}
header.masthead .masthead-content {
  z-index: 1;
  position: relative;
}
header.masthead .masthead-content .masthead-heading {
  font-size: 4rem;
}
header.masthead .masthead-content .masthead-subheading {
  font-size: 2rem;
}
@media (min-width: 992px) {
  header.masthead {
    padding-top: calc(10rem + 55px);
    padding-bottom: 10rem;
  }
  header.masthead .masthead-content .masthead-heading {
    font-size: 6rem;
  }
  header.masthead .masthead-content .masthead-subheading {
    font-size: 4rem;
  }
}
</style>
